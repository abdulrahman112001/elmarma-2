import axios from "axios"
import { AxiosResponse, AxiosRequestConfig } from "axios"
import i18n from "../i18n"

// const baseURL = import.meta.env.VITE_BACK_URL
// const baseURL = "http://192.168.0.117:8000"
const baseURL = "https://elmarma.com/api/v1"
const lang = i18n.language.startsWith("ar") ? "ar" : "en"

const client = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer token`,
    "Content-Type": `application/json`,
    // "Content-Type": `multipart/form-data`,
    // 'Connection': 'keep-alive',
    "Accept-Language": lang,
    // "ngrok-skip-browser-warning": true
  },
})

export const request = async <T>(options: AxiosRequestConfig): Promise<T> => {
  const onSuccess = (response: AxiosResponse) => response.data.data
  // const onError = (error: AxiosError) => error
  return await client(options).then(onSuccess)
}
