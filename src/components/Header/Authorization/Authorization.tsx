import React from 'react';
import s from './Authorization.module.css';
import {NavLink} from "react-router-dom";
import {initialStateAuthorizationType} from "../../../redax/Authorization-reducer";

type AuthorizationType = {
    stateUser: initialStateAuthorizationType
}

export const Authorization = (props: AuthorizationType) => {
    return (
        <div className={s.main_div_auth}>
            {props.stateUser.isAuth
                ? <h2>{props.stateUser.login}</h2>
                : <>
                    <NavLink to={'/signIn'} className={s.button}>
                        Sign In
                    </NavLink>
                    <NavLink to={'/SignUp'} className={s.button}>
                        Sign Up
                    </NavLink>
                </>
            }
        </div>
    );
};
