import React from 'react';
import s from "./InputForm.module.css";
import {useFormik} from "formik";

type InputFormType = {

}

export const InputForm = (props: InputFormType) => {

    const registrationForm = useFormik({
        initialValues: { message: ""},
        validate: (values) => {
            if (!values) return {message: "Field is required"}
        },
        onSubmit: (values) => {
            /*dispatch(registrationTC(values));*/
            console.log(JSON.stringify(values, null, 2))
            registrationForm.resetForm();
        },
    });

    return (
        <div className={s.main_block_input_form}>
            <form className={s.form_3} onSubmit={registrationForm.handleSubmit}>

                <p className={s.clearfix}>
                    <label htmlFor="message">Login</label>
                    <input
                        type="text"
                        placeholder="Text message"
                        {...registrationForm.getFieldProps("message")}
                    />
                    {registrationForm.touched.message && registrationForm.errors.message ? (
                        <div style={{color: "red", fontSize: "1.2rem"}}>{registrationForm.errors.message}</div>
                    ) : null}
                </p>

                <p className={s.clearfix}>
                    <button
                        className={s.button}
                        type="submit"
                        disabled={!(registrationForm.isValid && registrationForm.dirty)}
                    >
                        Send Message
                    </button>
                </p>
            </form>
        </div>
    );
};
