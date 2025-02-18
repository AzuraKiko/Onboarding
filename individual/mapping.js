const fs = require("fs");
const eql = require("deep-equal");
const path = require("path");
const { fields } = require("../config/mapIndividual");

const filePath1 = path.resolve(__dirname, "auseix.json");
const filePath2 = path.resolve(__dirname, "equix.json");

let auseixData, equixData;

// Kiểm tra tồn tại và đọc dữ liệu từ file JSON
try {
  if (!fs.existsSync(filePath1)) {
    console.error("File 'auseix.json' không tồn tại tại đường dẫn:", filePath1);
    process.exit(1);
  }
  if (!fs.existsSync(filePath2)) {
    console.error("File 'equix.json' không tồn tại tại đường dẫn:", filePath2);
    process.exit(1);
  }

  auseixData = JSON.parse(fs.readFileSync(filePath1, "utf-8"));
  equixData = JSON.parse(fs.readFileSync(filePath2, "utf-8"));
} catch (error) {
  console.error("Lỗi đọc dữ liệu từ file JSON:", error.message);
  process.exit(1);
}

// Định nghĩa field mappings (Auseix -> Equix)
const fieldMappings = fields;

// Hàm lấy giá trị từ object, hỗ trợ đường dẫn key kiểu `a.b[0].c`
const getValue = (obj, key) => {
  return key.split(".").reduce((acc, k) => {
    if (!acc) return undefined;
    const match = k.match(/^(\w+)\[(\d+)\]$/);
    if (match) {
      const [, arrayKey, index] = match;
      return acc[arrayKey] && acc[arrayKey][index] !== undefined
        ? acc[arrayKey][index]
        : undefined;
    }
    return acc[k] !== undefined ? acc[k] : undefined;
  }, obj);
};

// Hàm kiểm tra kiểu dữ liệu
const checkType = (value, expectedType) => {
  if (expectedType === "string") {
    // Nếu là định dạng YYYY-MM-DD thì vẫn hợp lệ
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return true;
    }
    return typeof value === "string";
  }

  if (expectedType === "number")
    return typeof value === "number" && !isNaN(value);

  if (expectedType === "boolean")
    return typeof value === "boolean";
  
  return true;
};

// Hàm chuẩn hóa dữ liệu theo kiểu

const normalizeValue = (value, type) => {
  if (value === undefined || value === null) return value;

  switch (type) {
    case "string":
      if (typeof value !== "string") return value;

      // Chuyển đổi số điện thoại từ AU (au|0412312312 -> 61412312312)
      if (value.includes("au|")) {
        const parts = value.split("|");
        if (parts.length === 2 && parts[0].toLowerCase() === "au") {
          return parts[1].replace(/^0/, "61"); // Chuyển đầu số 0 thành 61
        }
      }

      // Chuyển đổi ngày dd/mm/yyyy -> yyyy-mm-dd
      if (/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
        const [dd, mm, yyyy] = value.split("/");
        return `${yyyy}-${mm}-${dd}`;
      }

      return value;

    default:
      return value;
  }
};
// Kiểm tra từng field
let resultTable = [];

for (let auseixKey in fieldMappings) {
  const { target, type, defaultValue, enumMap } = fieldMappings[auseixKey];

  const auseixValue = getValue(auseixData, auseixKey);
  // let equixValue = target ? getValue(equixData, target) : undefined;
  let equixValue;
  if (Array.isArray(target)) {
    equixValue = target
      .map(t => getValue(equixData, t))
      .filter(v => v !== undefined) // Lọc giá trị `undefined`
      .join(" "); // Gộp lại thành chuỗi
  } else {
    equixValue = target ? getValue(equixData, target) : undefined;
  }


  // Áp dụng defaultValue nếu cần
  const finalAuseixValue = auseixValue ?? defaultValue;

  // Kiểm tra kiểu dữ liệu hợp lệ
  const isTypeValid = checkType(finalAuseixValue, type);

  // Nếu có enumMap, ánh xạ giá trị
  const mappedAuseixValue =
    enumMap && finalAuseixValue in enumMap
      ? enumMap[finalAuseixValue]
      : finalAuseixValue;
  const mappedEquixValue = equixValue;

  // Chuẩn hóa dữ liệu trước khi so sánh
  const normalizedEquixValue = normalizeValue(mappedEquixValue, type);

  // Xác định giá trị so sánh và trạng thái match
  let matchResult = ""; // Mặc định nếu không có target
  if (target) {
    matchResult =
      isTypeValid && eql(mappedAuseixValue, normalizedEquixValue) ? "✅" : "❌";
  } else
    matchResult =
      isTypeValid && eql(mappedAuseixValue, defaultValue) ? "✅" : "❌";


  resultTable.push({
    "Auseix Field": auseixKey,
    "Equix Field": Array.isArray(target) ? target.join(", ") : target || "N/A",
    "Auseix Value": mappedAuseixValue,
    "Equix Value": target ? normalizedEquixValue : "❌",
    "Type Valid": isTypeValid ? "✅" : `❌ (Expected ${type})`,
    Match: matchResult,
  });

};

// Truncate string
function truncateString(str, maxLength = 30) {
  return str && str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
}

console.table(
  resultTable.map(row => ({
    ...row,
    // "Auseix Field": truncateString(row["Auseix Field"], 30),
    "Equix Field": truncateString(row["Equix Field"], 30),
    "Auseix Value": truncateString(row["Auseix Value"], 20),
  }))
);


const filePath = path.resolve(__dirname, "result.json");

// Ghi kết quả vào file JSON
try {
  fs.writeFileSync(filePath, JSON.stringify(resultTable, null, 2), "utf-8");
  console.log("Kết quả đã được ghi vào file result.json");
} catch (error) {
  console.error(error);
}
