import axios from "axios"
import i18n from "../i18n"

 const baseURL = `https://elfinaly.com/api/v1/`
//  const url = "http://localhost:3000/"
 const url = "https://www.elmarma.com/"



 const lang = i18n.language.startsWith("ar") ? "ar" : "en"
 const  customLang  = `localization=${lang}`

 const  apiClient =  axios.create({
  baseURL,
  headers: {
    // Authorization: `Bearer ${token}`,
    "Content-Type": `application/json`,
    // "Content-Type": `multipart/form-data`,

    'Accept': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    // "Accept-Language":lang,
    // "ngrok-skip-browser-warning": true
  },
})

export {
  lang , 
  apiClient,
  customLang,
  url
}