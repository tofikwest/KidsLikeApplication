import React from "react";
import { Formik } from "formik";
import { AuthContainer } from "./AuthStyled";
import sprite from "../../images/sprite.svg";
import { googleLogin, login, register } from "../../redux/contacts/auth/authOperations";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .required("No password provided!")
    .min(8, "Password is too short! Should be 8 chars minimum")
    .matches(/(?=.*[0-9])/, "Password must contain a number!"),
});

const Auth = () => {
  const dispatch = useDispatch();

  return (
    <AuthContainer>
      <h1 className="authTitle">Выполняй задания, получи классные призы!</h1>
      <p className="authText">Вы можете авторизоваться с помощью Google Account:</p>

      <button className="googleBtn" type="button" onClick={() => dispatch(googleLogin())}>
        <svg className="icon-user">
          <use href={sprite + "#icon-google-symb"} />
        </svg>{" "}
        Google
      </button>

      <p>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</p>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     // className="accent-red"
        //     errors.email = "Это обязательное поле";
        //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        //     errors.email = "Invalid email address";
        //   }
        //   return errors;
        // }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
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
    </AuthContainer>
  );
};
export default Auth;