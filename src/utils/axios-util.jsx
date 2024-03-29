import axios from "axios"
import i18n from "../i18n"



// const url = "http://localhost:3000/"
 const url = "https://elmarma.com/"


const baseURL = `https://admin.elmarma.com/api/v1/`

 const lang = "ar" 
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
 } )

  const baseURLEn = `https://v3.football.api-sports.io/`

const  apiClientEn=  axios.create({
  baseURLEn,
  headers: {
    // Authorization: `Bearer ${token}`,
    "Content-Type": `application/json`,
    "x-rapidapi-host":"v3.football.api-sports.io",
    "x-rapidapi-key":"135101a0a8e831d6f0e3c40095f167ab",
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
  apiClientEn,
  url
}