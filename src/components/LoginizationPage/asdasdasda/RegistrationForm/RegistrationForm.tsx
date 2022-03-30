/*
import React, { useState } from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import s from "./RegistrationForm.module.css";
import "./MustContainItem.css";
import MustContainItem from "./MustContainItem";
import { useDispatch, useSelector } from "react-redux";
import {
  registrationError,
  registrationTC,
} from "../../../redux/global/authReduser";
import { RootStateType } from "../../../redux/store";

import { message } from "antd";
import ops from "../../../redux/auth/authOperations";

//images
import showPwdImg from "./../../../images/RegistrationImages/view.png";
import hidePwdImg from "./../../../images/RegistrationImages/private.png";
import googleImg from "./../../../images/RegistrationImages/googleIcon.png";
import facebookImg from "./../../../images/RegistrationImages/facebookIcon.png";
import twitterImg from "./../../../images/RegistrationImages/TwitterIcon.png";

type FormikErrorType = {
  name?: string;
  email?: string;
  password?: string;
};

export const RegistrationForm = (props: any) => {
  const dispatch = useDispatch();
  const isRegister = useSelector<RootStateType, boolean>(
    (state) => state.registration.isRegistred
  );

  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const registrationForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.name) {
        errors.name = "Field is required";
      }
      if (!values.email) {
        errors.email = "Field is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Field is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      dispatch(registrationTC(values));
      registrationForm.resetForm();
    },
  });

  const passwordOne = registrationForm.values.password;
  const mustContainData = [
    ["заглавную букву", passwordOne.toLowerCase() !== passwordOne],
    ["строчную букву", passwordOne.toUpperCase() !== passwordOne],
    ["цифру", /\d/.test(passwordOne)],
    ["8 символов", passwordOne.length >= 8],
  ];

  if (isRegister) return <Redirect to={"/confirm"} />;

  return (
    <div className={s.regContainer}>
      <div className={s.registrationBorder}>
        <form onSubmit={registrationForm.handleSubmit}>
          <div className={s.inputContaiber}>
            <h3>Регистрация</h3>
            <input
              type="text"
              // name="name"
              placeholder={"Имя"}
              {...registrationForm.getFieldProps("name")}
            />
            {registrationForm.touched.name && registrationForm.errors.name ? (
              <div style={{ color: "red" }}>{registrationForm.errors.name}</div>
            ) : null}
            <input
              type="email"
              // label="Email"
              placeholder={"Email"}
              {...registrationForm.getFieldProps("email")}
            />
            {registrationForm.touched.email && registrationForm.errors.email ? (
              <div style={{ color: "red" }}>
                {registrationForm.errors.email}
              </div>
            ) : null}

            <div className={s.pwdContainer}>
              <input
                type={isRevealPwd ? "text" : "password"}
                placeholder={"Пароль"}
                {...registrationForm.getFieldProps("password")}
              />
              <img
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? hidePwdImg : showPwdImg}
                onClick={() => setIsRevealPwd((prevState) => !prevState)}
              />
              {registrationForm.values.password ? (
                <div className={"validateContainer"}>
                  <span>Пароль должен содержать как минимум:</span>
                  <div>
                    {mustContainData.map((data) => (
                      <MustContainItem data={data} />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className={s.signInScope}>
            <span>или зарегестрироваться с:</span>
            <div className={s.buttonsScope}>
              <button className={s.googleBtn}>
                <img src={googleImg} alt="" />
                <span>Google</span>
              </button>
              <button className={s.facebookBtn}>
                <img src={facebookImg} alt="" />
                <span>Facebook</span>
              </button>
              <button className={s.twittBtn}>
                <img src={twitterImg} alt="" />
                <span>Twitter</span>
              </button>
            </div>
          </div>
          <button type={"submit"} className={s.submitBtn}>
            Зарегистрироваться
          </button>
        </form>
        <p className={s.loginLink}>
          У вас уже есть аккаунт?
          <NavLink exact to="/login">
            <p>Вход</p>
          </NavLink>
        </p>
      </div>
    </div>
  );
};
*/

export const appp = () => {
    return
}