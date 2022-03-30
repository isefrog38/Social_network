import React  from "react";
import {useFormik} from "formik";
import {NavLink} from "react-router-dom";
import s from "./asdasdasda/RegistrationForm/RegistrationForm.module.css";
import MustContainItem from "./asdasdasda/RegistrationForm/MustContainItem";

/*type FormikErrorType = {
    name?: string;
    email?: string;
    password?: string;
};*/

export const RegistrationForm = (props) => {

    const registrationForm = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validate: (values) => {
            const errors/*: FormikErrorType*/ = {};
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
                            <div style={{color: "red"}}>{registrationForm.errors.name}</div>
                        ) : null}
                        <input
                            type="email"
                            // label="Email"
                            placeholder={"Email"}
                            {...registrationForm.getFieldProps("email")}
                        />
                        {registrationForm.touched.email && registrationForm.errors.email ? (
                            <div style={{color: "red"}}>
                                {registrationForm.errors.email}
                            </div>
                        ) : null}

                        <div className={s.pwdContainer}>
                            <input
                                type={"password"}
                                placeholder={"Пароль"}
                                {...registrationForm.getFieldProps("password")}
                            />
                            {registrationForm.values.password ? (
                                <div className={"validateContainer"}>
                                    <span>Пароль должен содержать как минимум:</span>
                                    <div>
                                        {mustContainData.map((data) => (
                                            <MustContainItem data={data}/>
                                        ))}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div>
                        <button type={"submit"} className={s.submitBtn}>
                            Зарегистрироваться
                        </button>
                    </div>
                    <p className={s.loginLink}>
                        У вас уже есть аккаунт?
                        <NavLink exact to="/login">
                            <p>Вход</p>
                        </NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
};
