import React, { useContext } from "react";
import Select from "react-select";
import { colors } from "../../general/styles/colors";
import languages from "../../languages";
import { LanguageContext } from "../App";
import { LanguageSwitcherStyled } from "./LanguageSwitcherStyled";
import selectIcon from "../../images/dropdown-arrow.svg";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const selectLanguage = (e) => {
    const lang = e.value;
    setLanguage(lang);
  };

  const getOptions = () => {
    const options = languages.list.reduce((acc, lang) => {
      acc.push({
        value: lang,
        label: lang.slice(0, 3).toUpperCase(),
      });
      return acc;
    }, []);

    return options;
  };

  const getSelectedLangInd = () => {
    return languages.list.findIndex((lang) => lang === language);
  };

  return (
    <LanguageSwitcherStyled colors={colors}>
      <Select
        options={getOptions()}
        onChange={selectLanguage}
        classNamePrefix="react-select"
        isSearchable={false}
        value={getOptions()[getSelectedLangInd()]}
        placeholder={false}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
      />
      <img className="arrowIcon" src={selectIcon} alt="icon" />
    </LanguageSwitcherStyled>
  );
};

export default LanguageSwitcher;
