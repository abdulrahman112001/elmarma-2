import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.rtl.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./App.css"
import "./Custom.css"
import { BrowserRouter as Router, RouterProvider } from "react-router-dom"
import { Routs } from "./pages/allRouts"
import {  QueryClientProvider, QueryClient } from "react-query";
import axios from "axios"
import i18n from "./i18n"
import { useIsRTL } from "./hooks/useIsRTL"
import { useLayoutEffect } from "react"
import { ReactQueryDevtools } from "react-query/devtools";

const lang = i18n.language.startsWith("ar") ? "ar" : "en"

const queryClient = new QueryClient();
export const apiClient = axios.create({
  baseURL: "https://elmarma.com/api/v1/",
  headers: {
    "Content-type": "multipart/form-data",
    Accept: "application/json",
    "Accept-Language": lang,

  },
})


const App = () => {
  const isRTL = useIsRTL()
  useLayoutEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = isRTL ? "ar" : "en"
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      
      <div className="App">
        <RouterProvider router={Routs} />
      </div>
      <ReactQueryDevtools initialIsOpen />

    </QueryClientProvider>
    )
}

export default App
