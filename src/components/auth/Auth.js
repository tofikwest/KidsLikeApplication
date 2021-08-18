import React from "react";
import { Formik } from "formik";
import { AuthContainer } from "./AuthStyled";
import sprite from "../../images/sprite.svg";

const Auth = () => (
  <AuthContainer>
    <h1 className="authTitle">Выполняй задания, получи классные призы!</h1>
    <p className="authText">Вы можете авторизоваться с помощью Google Account:</p>
    <form action="/auth/google" method="post">
      <button type="submit" className="googleBtn">
        <svg className="icon-user">
          <use href={sprite + "#icon-google-symb"} />
        </svg>{" "}
        Google
      </button>
    </form>
    <p>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</p>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          // className="accent-red"
          errors.email = "Это обязательное поле";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="user-form">
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
          {errors.email && touched.email && errors.email}
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
          {errors.password && touched.password && errors.password}
          <div className="auth-btn-wrap">
            <button className="user-button" type="submit" disabled={isSubmitting}>
              Войти
            </button>
            <button className="user-button" type="submit" disabled={isSubmitting}>
              Зарегистрироваться
            </button>
          </div>
        </form>
      )}
    </Formik>
  </AuthContainer>
);

export default Auth;
