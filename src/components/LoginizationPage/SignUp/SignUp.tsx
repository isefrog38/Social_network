import React from "react";
import {useFormik} from "formik";
import {NavLink} from "react-router-dom";
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

const SignUp = ({theme}: SignUpType) => {

    const registrationForm = useFormik({
        initialValues: {name: "", email: "", password: "", rememberMe: false},
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.name) {
                errors.name = "Name is required";
            }
            if (!values.email) {
                errors.email = "Field is required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = "Invalid email address";
            }
            if (!values.password) {
                errors.password = "Password is required";
            } else if (values.password.length < 4) {
                errors.password = "Password must be more than 4 characters"
            }
            return errors;
        },
        onSubmit: (values) => {
            /*dispatch(registrationTC(values));*/
            alert(JSON.stringify(values, null, 2))
            console.log(JSON.stringify(values, null, 2))
            registrationForm.resetForm();
        },
    });

    const passwordOne = registrationForm.values.password;
    const mustContainData = [
        ["заглавную букву", passwordOne.toLowerCase() !== passwordOne],
        ["строчную букву", passwordOne.toUpperCase() !== passwordOne],
        ["цифру", /\d/.test(passwordOne)],
        ["4 символов", passwordOne.length >= 4],
    ];

    return (
        <div className={s.main_login}>
            <div className={s.modal_wrapper}>
                <div className={s.modal_window}>
                    <form className={s.form_3} onSubmit={registrationForm.handleSubmit}>

                        <h1 style={{color: "white", fontWeight: "700"}}>Registration</h1>

                        <p className={s.clearfix}>
                            <label htmlFor="login">Login</label>
                            <input
                                type="text"
                                id="login"
                                placeholder="login"
                                {...registrationForm.getFieldProps("name")}
                            />
                            {registrationForm.touched.name && registrationForm.errors.name ? (
                                <div style={{color: "red", fontSize: "1.2rem"}}>{registrationForm.errors.name}</div>
                            ) : null}
                        </p>

                        <p className={s.clearfix}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                placeholder="email"
                                {...registrationForm.getFieldProps("email")}
                            />
                            {registrationForm.touched.email && registrationForm.errors.email ? (
                                <div style={{color: "red", fontSize: "1.2rem"}}>{registrationForm.errors.email}</div>
                            ) : null}
                        </p>

                        <p className={s.clearfix}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="password"
                                {...registrationForm.getFieldProps("password")}
                            />
                            {registrationForm.touched.password && registrationForm.errors.password ? (
                                <div style={{color: "red", fontSize: "1.2rem"}}>{registrationForm.errors.password}</div>
                            ) : null}
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
                            <input
                                style={{width: "50px", height: "50px"}}
                                type="checkbox"
                                id="remember"
                                {...registrationForm.getFieldProps("rememberMe")}
                            />
                            <label htmlFor="remember" className={s.label_rememberMe_block}>
                                Remember me
                            </label>

                            <button
                                className={s.button}
                                type="submit"
                                name="submit"
                                value="Submit"
                                disabled={!(registrationForm.isValid && registrationForm.dirty)}
                            >
                                Submit
                            </button>
                        </p>

                        <p className={s.clearfix}>
                            <span className={s.register}>You have an account ? Sign In !</span>
                            <NavLink to="/signIn">
                                <button className={s.button} >
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

export default SignUp;

const MustContainItem = (props: any) => {
    const { data } = props;
    const label = data[0];
    const meetsReq = data[1];

    const setClass = () => {
        const classArr = ["invalidStyle"]; //invalid logo img
        if (meetsReq) classArr.push("validStyle"); //valid logo img
        return classArr.join(" ");
    };

    return (
        <span style={{fontWeight: "500", fontSize: "1rem"}}>
      <div className={"validateChecklist"}>
        <span >{label}</span>
        <div className={setClass()} />
      </div>
    </span>
    );
};




