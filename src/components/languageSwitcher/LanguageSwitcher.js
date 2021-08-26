import React, { useContext } from "react";
import Select from "react-select";
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
      <Select
        options={languages}
        onChange={selectLanguage}
        classNamePrefix="react-select"
        isSearchable={false}
        value={language}
        components={{
          // DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
      />

      {/* <select value={language} onChange={selectLanguage}>
        {languages.list.map((lang) => (
          <option value={lang} key={lang}>
            {lang}
          </option>
        ))}
      </select> */}
    </>
  );
};

export default LanguageSwitcher;
