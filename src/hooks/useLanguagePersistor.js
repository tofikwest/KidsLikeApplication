import { useEffect, useState } from "react";
import languages from "../languages";

const useLanguagePersistor = () => {
  const getLocalStorLanguage = () => {
    const lang = JSON.parse(localStorage.getItem("language"));
    return lang || languages.russian.title;
  };
  const [language, setLanguage] = useState(getLocalStorLanguage());

  // const toggler = () => {
  //   setLanguage((prev) => (prev === "russian" ? "ukrainian" : "russian"));
  // };
  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]);
  return [language, setLanguage];
  // return [language, toggler];
};

export default useLanguagePersistor;
