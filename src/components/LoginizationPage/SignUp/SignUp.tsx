import React from "react";
import {useFormik} from "formik";
import {NavLink} from "react-router-dom";
import MustContainItem from "../MustContainItem";
import s from "./SignUp.module.css";
import {ThemeType} from "../../../App";

type SignUpType = {
    theme: ThemeType
}

type FormikErrorType = {
    name?: string;
    email?: string;
    password?: string;
};

export const SignUp = (props: SignUpType) => {

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
            /*dispatch(registrationTC(values));*/
            alert(values)
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

    return (
        <div className={s.main_login}>
            <div className={s.modal_wrapper}>
                <div className={s.modal_window}>
                    <form className={s.form_3}>

                        <h1 style={{color: "white", fontWeight: "700"}}>Registration</h1>

                        <p className={s.clearfix}>
                            <label htmlFor="login">Login</label>
                            <input type="text" id="login"
                                   placeholder="login" {...registrationForm.getFieldProps("name")}/>
                            {registrationForm.touched.name && registrationForm.errors.name ? (
                                <div style={{color: "red", fontSize: "1.2rem"}}>{registrationForm.errors.name}</div>
                            ) : null}
                        </p>

                        <p className={s.clearfix}>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email"
                                   placeholder="email" {...registrationForm.getFieldProps("email")}/>
                            {registrationForm.touched.email && registrationForm.errors.email ? (
                                <div style={{color: "red", fontSize: "1.2rem"}}>{registrationForm.errors.email}</div>
                            ) : null}
                        </p>

                        <p className={s.clearfix}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password"
                                   placeholder="password" {...registrationForm.getFieldProps("password")}/>

                            {registrationForm.values.password ? (
                                <div className={s.text_helper}>
                                    <div className={s.angle}/>
                                    <span>Пароль должен содержать как минимум:</span>
                                    <div className={s.text_helper_small_text}>
                                        {mustContainData.map((data) => (
                                            <MustContainItem data={data}/>
                                        ))}
                                    </div>
                                </div>
                            ) : null}
                        </p>

                        <p className={s.clearfix}>
                            <input type="checkbox" name="remember" id="remember" style={{width: "50px", height: "50px"}}/>
                            <label htmlFor="remember" style={{fontSize: "0.8rem", fontWeight: "400", width: "100%"}}>Remember me</label>

                            <button type="submit" name="submit" value="Submit">
                                Submit
                            </button>
                        </p>

                        <p className={s.clearfix}>
                            <span className={s.register}>You have an account? Sign In !</span>
                            <NavLink to="/signIn">
                                <button type="submit" name="submit" value="Submit">
                                    Sign In
                                </button>
                            </NavLink>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
};




