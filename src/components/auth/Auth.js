import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentUserOperation, login, register } from "../../redux/auth/authOperations";
import { setToken } from "../../redux/auth/authSelectors";
import { AuthContainer, BackDeskImg, DeskWrapper } from "./AuthStyled";
import sprite from "../../images/sprite.svg";
import Footer from "../footer/Footer";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("это обязательное поле")
    .matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, "неверный формат"),
  password: Yup.string()
    .required("это обязательное поле")
    .min(8, "длина пароля - не менее 8 символов")
    .matches(/(?=.*[0-9])/, "пароль должен содержать цифру"),
});

const Auth = () => {
  const dispatch = useDispatch();
  const token = useSelector(setToken);

  useEffect(() => {
    if (token) {
      getCurrentUserOperation();
    }
  }, [token]);

  return (
    <DeskWrapper>
      <BackDeskImg />
      <AuthContainer>
        <h1 className="authTitle">Выполняй задания, получи классные призы!</h1>

        <Formik initialValues={{ email: "", password: "" }} validationSchema={validationSchema}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="user-form">
              <p className="authText">Вы можете авторизоваться с помощью Google Account:</p>
              <a href="https://kidslikev1.herokuapp.com/auth/google" className="googleBtn" aria-label="google button">
                <svg className="icon-user">
                  <use href={sprite + "#icon-google-symb"} />
                </svg>{" "}
                Google
              </a>
              <p>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</p>
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
              {errors.email && touched.email && <p className="accent-red">{errors.email}</p>}
              <label className="user-label" htmlFor="password">
                <span className="accent-red">*</span>
                Пароль:
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="abraKadabra777"
                className="user-input"
              />
              {errors.password && touched.password && <p className="accent-red">{errors.password}</p>}

              <div className="auth-btn-wrap">
                <button className="user-button" type="button" onClick={() => dispatch(login(values))}>
                  Войти
                </button>
                <button className="user-button" type="button" onClick={() => dispatch(register(values))}>
                  Зарегистрироваться
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
