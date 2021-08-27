import React from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentUserOperation, login, register } from "../../redux/auth/authOperations";
import { getError, setToken } from "../../redux/auth/authSelectors";
import { AuthContainer, BackDeskImg, DeskWrapper } from "./AuthStyled";
import sprite from "../../images/sprite.svg";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";
import { validationSchema } from "./Validator";
import { useState } from "react";

const Auth = () => {
  const dispatch = useDispatch();
  const token = useSelector(setToken);
  const { t } = useTranslation();
  const error = useSelector(getError);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (token) {
      getCurrentUserOperation();
    }
  }, [token]);

  useEffect(() => {
    if (error?.includes("403")) {
      setErrorMessage("Wrong password!");
    }
  }, [error, dispatch]);

  return (
    <DeskWrapper>
      <BackDeskImg />
      <AuthContainer>
        <h1 className="authTitle">{t("Complete tasks, win awesome prizes")}</h1>

        <Formik initialValues={{ email: "", password: "" }} validationSchema={validationSchema}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="user-form">
              <p className="authText">{t("You may log in using your Google Account")}</p>
              <a href="https://kidslikev1.herokuapp.com/auth/google" className="googleBtn" aria-label="google button">
                <svg className="icon-user">
                  <use href={sprite + "#icon-google-symb"} />
                </svg>{" "}
                Google
              </a>
              <p>{t("Or register and then use your e-mail & password")}</p>
              <div className="forAbsolutewrap">
                <label className="user-label" htmlFor="email">
                  <span className="accent-red">*</span>
                  E-mail:
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="your@email.com"
                  className="user-input"
                />
                {errors.email && touched.email && <p className="mistakeStyle">{t([errors.email])}</p>}
              </div>
              <div className="forAbsolutewrap">
                <label className="user-label" htmlFor="password">
                  <span className="accent-red">*</span>
                  {t("Password")}
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => {
                    errorMessage && setErrorMessage("");
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="abraKadabra777"
                  className="user-input"
                />
                {errors.password && touched.password && <p className="mistakeStyle">{t([errors.password])}</p>}
                {errorMessage && <p className="mistakeStyle2">{errorMessage}</p>}
              </div>
              <div className="auth-btn-wrap">
                <button className="user-button" type="button" onClick={() => dispatch(login(values))}>
                  {t("Log In")}
                </button>
                <button className="user-button" type="button" onClick={() => dispatch(register(values))}>
                  {t("Registration")}
                </button>
              </div>
            </form>
          )}
        </Formik>
        <Footer />
      </AuthContainer>
    </DeskWrapper>
  );
};
export default Auth;
