import React from "react";
import {useFormik} from "formik";
import {NavLink} from "react-router-dom";
import MustContainItem from "../MustContainItem";
import s from "./SignIn.module.css";
import {ThemeType} from "../../../App";

type SignInType = {
    theme: ThemeType
}

type FormikErrorType = {
    name?: string;
    email?: string;
    password?: string;
};

export const SignIn = (props: SignInType) => {

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

                        <h1 style={{color: "white", fontWeight: "700"}}>Account login</h1>

                        <p className={s.clearfix}>
                            <label htmlFor="login">Login</label>
                            <input type="text" id="login"
                                   placeholder="login" {...registrationForm.getFieldProps("name")}/>
                            {registrationForm.touched.name && registrationForm.errors.name ? (
                                <div style={{color: "red", fontSize: "1.2rem"}}>{registrationForm.errors.name}</div>
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

                                <button type="submit" name="submit" value="Submit" >
                                    Submit
                                </button>
                            </p>

                        <p className={s.clearfix}>
                            <span className={s.register}>You don't have an account ? SignUp !</span>
                            <NavLink to="/signUp">
                                <button type="submit" name="submit" value="Submit">
                                    Create new account
                                </button>
                            </NavLink>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
};










/*import React from 'react';
import s from "./SignIn.module.css";
import {RegistrationForm} from "./Exemple";

export const SignIn = () => {
    return (
        <div className={s.main_login}>
            <div className={s.modal_wrapper}>
                <div className={s.modal_window}>
                    <form className={s.form_3}>
                        <p className={s.clearfix}>
                            <label htmlFor="login">SignIn</label>
                            <input type="text" name="login" id="login" placeholder="login"/>
                        </p>
                        <p className={s.clearfix}>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="password"/>
                        </p>
                        <p className={s.clearfix}>
                            <input type="checkbox" name="remember" id="remember"/>
                            <label htmlFor="remember">Remember me</label>
                        </p>
                        <p className={s.clearfix}>
                            <input type="submit" name="submit" value="Submit"/>
                        </p>
                    </form>
                    <RegistrationForm />
                </div>
            </div>
        </div>
    );
}*/


