import React, {useState} from 'react';
import s from './Authorization.module.css';
import {initialStateAuthorizationType} from "../../../Reducers-Store/Authorization-reducer";
import {NavLink} from "react-router-dom";

type AuthorizationType = {
    stateUser: initialStateAuthorizationType
}

export const Authorization = (props: AuthorizationType) => {

    let [showSignIn, setShowSignIn] = useState<boolean>(false);
    let [showSignUp, setShowSignUp] = useState<boolean>(false);

    const onClickHandlerSignIn = () => {
        setShowSignIn(!showSignIn)
    }

    const onClickHandlerSignUp = () => {
        setShowSignUp(!showSignUp)
    }

    return (
        <div className={s.main_div_auth}>
            {props.stateUser.isAuth
                ? <h2>{props.stateUser.login}</h2>
                : <>
                    <NavLink to={'/signIn'} className={s.button} onClick={onClickHandlerSignIn}>
                        Sign In
                    </NavLink>
                    <NavLink to={'/signUp'} className={s.button} onClick={onClickHandlerSignUp}>
                        Sign Up
                    </NavLink>
                </>
            }
        </div>
    );
};
