
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: "languageOnly",
    backend: {
      // loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      caches: ["localStorage"], // cache user language on
    },
    fallbackLng: "ar",
    // debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    initImmediate: false,
  })

export default i18n
