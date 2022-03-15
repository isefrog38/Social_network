import React from 'react';
import s from "./SignUp.module.css";

type SignUpType = {
    setShowSignUp: (value: boolean) => void
}

export const SignUp = (props: SignUpType) => {
    return (
        <div className={s.modal_wrapper}>
            <div className={s.modal_window}>
                <form className={s.form_3}>
                    <p className={s.clearfix}>
                        <label htmlFor="login">Login</label>
                        <input type="text" name="login" id="login" placeholder="login"/>
                    </p>
                    <p className={s.clearfix}>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="password"/>
                    </p>
                    <p className={s.clearfix}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="email"/>
                    </p>
                    <p className={s.clearfix}>
                        <input type="checkbox" name="remember" id="remember"/>
                        <label htmlFor="remember">Remember me</label>
                    </p>
                    <p className={s.clearfix}>
                        <input type="submit" name="submit" value="Submit"/>
                    </p>
                </form>
            </div>
            <div className={s.overlay} onClick={() => props.setShowSignUp(false)}></div>
        </div>
    );
};
