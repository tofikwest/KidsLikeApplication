import languages from "..";

export const buttonLangSelector = (language, value) => {
  return languages[language].pages.authPage.authForm.buttons[value];
};
export const errorLangSelector = (language, value) => {
  return languages[language].pages.authPage[value];
};
