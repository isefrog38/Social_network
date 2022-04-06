import React from "react";
import {useFormik} from "formik";
import {NavLink} from "react-router-dom";
import s from "./SignIn.module.css";
import {ThemeType} from "../../../App";
import {useDispatch} from "react-redux";
import {getAccountAuthTC} from "../../../Thunk/Login_Thunk";
import {RedirectToProfile} from "../../../HOC/AuthRedirect";

type SignInType = {
    theme: ThemeType
}
type FormikErrorType = {
    email?: string;
    password?: string;
    rememberMe?: boolean
};

const SignIn = ({theme}: SignInType) => {

    const dispatch = useDispatch();

    const registrationForm = useFormik({
        initialValues: { email: "", password: "" , rememberMe: false, captcha: true},
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = "Field is required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = "Invalid email address";
            }
            if (!values.password || values.password.length < 6) {
                errors.password = "Password is required";
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(getAccountAuthTC(values));
            console.log(JSON.stringify(values, null, 2));
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
                    <form className={s.form_3} onSubmit={registrationForm.handleSubmit}>

                        <h1 style={{color: "white", fontWeight: "700"}}>Account login</h1>

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
                                {registrationForm.values.password ? (
                                    <div className={s.text_helper}>
                                        <div className={s.angle}/>
                                        <span>Пароль должен содержать как минимум:</span>
                                        <div className={s.text_helper_small_text}>
                                            {mustContainData.map((data) => (
                                                <MustContainItem key={data} data={data}/>
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
                            <span className={s.register}>You don't have an account ?    SignUp !</span>
                            <NavLink to="/signUp">
                                <button className={s.button}>
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


export default RedirectToProfile(SignIn);


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




