
module.exports = {
    fields: {
        "customerReferenceNumber": { target: "equix_id", type: "string" },
        "applicant.entityType": {
            target: "account_type",
            type: "string",
            enumMap: { Individual: "INDIVIDUAL" },
        },
        "applicant.person.title": {
            target: "applicant_details[0].title",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },

        "applicant.person.firstName": {
            target: "applicant_details[0].first_name",
            type: "string",
        },
        "applicant.person.middleName": {
            target: "applicant_details[0].middle_name",
            type: ["string", null],
        },
        "applicant.person.lastName": {
            target: "applicant_details[0].last_name",
            type: "string",
        },
        "applicant.person.residentialAddress": {
            type: "object",
        },
        "applicant.person.residentialAddress.streetAddress": {
            target: [
                "applicant_details[0].residential_address_address_line_1",
                "applicant_details[0].residential_address_address_line_2"
            ],
            type: "string",
        },
        "applicant.person.residentialAddress.city": {
            target: "applicant_details[0].residential_address_city_suburb",
            type: "string",
        },
        "applicant.person.residentialAddress.region": {
            type: "object",
        },
        "applicant.person.residentialAddress.region.code": {
            target: "applicant_details[0].residential_address_state",
            type: "string",
        },
        "applicant.person.residentialAddress.postalCode": {
            target: "applicant_details[0].residential_address_postcode",
            type: "string",
        },
        "applicant.person.residentialAddress.country": {
            type: "object",
        },
        "applicant.person.residentialAddress.country.code": {
            target: "applicant_details[0].residential_address_country",
            type: "string",
            enumMap: { ANDORRA: "AD", AUSTRALIA: "AU", BAHRAIN: "BH" },
        },
        "applicant.person.postalAddress": {
            type: "object",
        },
        "applicant.person.postalAddress.streetAddress": {
            target: [
                "applicant_details[0].postal_address_address_line_1",
                "applicant_details[0].postal_address_address_line_2"
            ],
            type: "string",

        },
        "applicant.person.postalAddress.city": {
            target: "applicant_details[0].postal_address_city_suburb",
            type: "string",
        },
        "applicant.person.postalAddress.region": {
            type: "object",
        },
        "applicant.person.postalAddress.region.code": {
            target: "applicant_details[0].postal_address_state",
            type: "string",
        },
        "applicant.person.postalAddress.postalCode": {
            target: "applicant_details[0].postal_address_postcode",
            type: "string",
        },
        "applicant.person.postalAddress.country": {
            type: "object",
        },
        "applicant.person.postalAddress.country.code": {
            target: "applicant_details[0].postal_address_country",
            type: "string",
            enumMap: { ANDORRA: "AD", AUSTRALIA: "AU", BAHRAIN: "BH" },
        },
        "applicant.person.emailAddresses": {
            type: "array",
        },
        "applicant.person.emailAddresses[0].type": {
            type: "string",
            defaultValue: "work",
        },
        "applicant.person.emailAddresses[0].value": {
            target: "applicant_details[0].applicant_email",
            type: "string",
        },
        "applicant.person.emailAddresses[0].isPreferred": {
            type: "boolean",
            defaultValue: true,
        },
        "applicant.person.phoneNumbers": {
            type: "array",
        },
        "applicant.person.phoneNumbers[0].type": {
            type: "string",
            defaultValue: "mobile",
        },
        "applicant.person.phoneNumbers[0].value": {
            target: "applicant_details[0].applicant_mobile_phone",
            type: "string",
        },
        "applicant.person.phoneNumbers.isPreferred": {
            type: "boolean",
            defaultValue: true,
        },
        "applicant.person.dateOfBirth": {
            target: "applicant_details[0].dob",
            type: "string",
        },



        "applicant.person.gender": {
            target: "applicant.person.gender",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.nationalities": {
            target: "applicant.person.nationalities",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.nationalities.country": {
            target: "applicant.person.nationalities.country",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.nationalities.type": {
            target: "applicant.person.nationalities.type",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.employment": {
            target: "applicant.person.employment",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.employment.type": {
            target: "applicant.person.employment.type",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.employment.category": {
            target: "applicant.person.employment.category",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.taxDetails": {
            target: "applicant.person.taxDetails",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.taxDetails.country": {
            target: "applicant.person.taxDetails.country",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.taxDetails.isSupplied": {
            target: "applicant.person.taxDetails.isSupplied",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.taxDetails.taxIdentificationNumber": {
            target: "applicant.person.taxDetails.taxIdentificationNumber",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.taxDetails.nonSupplyReasonCode": {
            target: "applicant.person.taxDetails.nonSupplyReasonCode",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.identityVerification": {
            target: "applicant.person.identityVerification",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.identityVerification.status": {
            target: "applicant.person.identityVerification.status",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.identityVerification.completionTimestamp": {
            target: "applicant.person.identityVerification.completionTimestamp",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.identityVerification.agentName": {
            target: "applicant.person.identityVerification.agentName",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.screeningResults": {
            target: "applicant.person.screeningResults",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.screeningResults.status": {
            target: "applicant.person.screeningResults.status",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.screeningResults.completionTimestamp": {
            target: "applicant.person.screeningResults.completionTimestamp",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "applicant.person.screeningResults.agentName": {
            target: "applicant.person.screeningResults.agentName",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        tradingProduct: {
            target: "tradingProduct",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "tradingProduct.type": {
            target: "tradingProduct.type",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "tradingProduct.canTradeWarrants": {
            target: "tradingProduct.canTradeWarrants",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "tradingProduct.contractNote": {
            target: "tradingProduct.contractNote",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "tradingProduct.contractNote.type": {
            target: "tradingProduct.contractNote.type",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "tradingProduct.contractNote.generationType": {
            target: "tradingProduct.contractNote.generationType",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        settlement: {
            target: "settlement",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "settlement.details": {
            target: "settlement.details",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "settlement.details.accountName": {
            target: "settlement.details.accountName",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "settlement.details.branchCode": {
            target: "settlement.details.branchCode",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "settlement.details.accountNumber": {
            target: "settlement.details.accountNumber",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "settlement.details.usedForCredits": {
            target: "settlement.details.usedForCredits",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "settlement.details.usedForDebits": {
            target: "settlement.details.usedForDebits",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "settlement.details.usedForDividends": {
            target: "settlement.details.usedForDividends",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "settlement.details.type": {
            target: "settlement.details.type",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "settlement.nettingPolicy": {
            target: "settlement.nettingPolicy",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "settlement.holdFunds": {
            target: "settlement.holdFunds",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "settlement.redirectDividends": {
            target: "settlement.redirectDividends",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        adviser: {
            target: "adviser",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "adviser.code": {
            target: "adviser.code",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "adviser.brokerageCode": {
            target: "adviser.brokerageCode",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        termsAndConditions: {
            target: "termsAndConditions",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "termsAndConditions.accepted": {
            target: "termsAndConditions.accepted",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "termsAndConditions.methodOfAcceptance": {
            target: "termsAndConditions.methodOfAcceptance",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "termsAndConditions.timestamp": {
            target: "termsAndConditions.timestamp",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        holdingDetails: {
            target: "holdingDetails",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "holdingDetails.hin": {
            target: "holdingDetails.hin",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "holdingDetails.pid": {
            target: "holdingDetails.pid",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "holdingDetails.address": {
            target: "holdingDetails.address",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "holdingDetails.address.addressLines": {
            target: "holdingDetails.address.addressLines",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "holdingDetails.address.postCode": {
            target: "holdingDetails.address.postCode",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },
        "holdingDetails.emailAddress": {
            target: "holdingDetails.emailAddress",
            type: "string",
            enumMap: { mr: "MR", mrs: "MRS", ms: "MS", miss: "MISS" },
        },

        // "applicant.dateOfBirth": { target: "applicant_details[0][0].dob", type: "date_ddmmyyyy" },
        "applicant.person.emailAddresses.type": {
            type: "string",
            defaultValue: "work",
        },
    },
};