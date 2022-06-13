import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ar } from "./languages/ar";
import { en } from "./languages/en";

i18n.use(initReactI18next).init({
  resources: {
    en,
    ar,
  },
  react: {
    useSuspense: false, //   <---- this will do the magic
  },
  lng: "ar",
});

export default i18n;
