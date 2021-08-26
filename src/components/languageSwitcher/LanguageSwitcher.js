import React, { useContext } from "react";
import languages from "../../languages";
import { LanguageContext } from "../App";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const selectLanguage = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
  };
  return (
    <>
      <select value={language} onChange={selectLanguage}>
        {languages.list.map((lang) => (
          <option value={lang} key={lang}>
            {lang}
          </option>
        ))}
      </select>
    </>
  );
};

export default LanguageSwitcher;
