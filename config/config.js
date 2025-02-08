const API_BASE_URL = process.env.API_BASE_URL; 
const WEBSITE_UID = process.env.WEBSITE_UID;
const S3_BASE_URL = process.env.S3_BASE_URL;
const WEBSITE_ID_KEY = "websiteProjectId";

const BANNER_TYPES = {
    HOME_BANNER: "HOME_BANNER",
    POPUP_BANNER: "POPUP_BANNER",
    AD_BANNER: "AD_BANNER",
  };

  const FETCH_METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  };
  
  const CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS={
    name : "strings.stringOne",
    city:"strings.stringThree",
    phone : "strings.stringTwo",
    email: "email",
    remarks: "remarks",
   };

   const CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS={
    name : "strings.stringOne",
    phone : "strings.stringTwo",
    email: "email",
    resume: "files.fileOne",
    remarks: "remarks",
   };

   const SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS={
    name : "strings.stringOne",
    phone:"strings.stringTwo",
    email: "email",
    remarks: "remarks",
    service:"strings.stringFive",
    serviceType:"serviceType",
    indate:"dates.dateOne",
    outdate:"dates.dateTwo",
    adults:"strings.stringThree",
    child:"strings.stringFour",
    seats:"strings.stringSix",
    time:"strings.stringSeven"
   };

module.exports={
  API_BASE_URL,
    WEBSITE_UID,
    S3_BASE_URL,
    BANNER_TYPES,
    FETCH_METHODS,
    WEBSITE_ID_KEY,
    CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS,
    SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS,
    CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS,
};
