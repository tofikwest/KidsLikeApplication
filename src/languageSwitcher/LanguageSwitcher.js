import React from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcherStyled } from "./LanguageSwitcherStyled";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <LanguageSwitcherStyled>
        {i18n.language === "en" && (
          <button className="langBtn" onClick={() => i18n.changeLanguage("ru")}>
            RU
          </button>
        )}
        {i18n.language === "ru" && (
          <button className="langBtn" onClick={() => i18n.changeLanguage("ua")}>
            UA
          </button>
        )}
        {i18n.language === "ua" && (
          <button className="langBtn" onClick={() => i18n.changeLanguage("en")}>
            EN
          </button>
        )}
      </LanguageSwitcherStyled>
    </>
  );
};

export default LanguageSwitcher;
