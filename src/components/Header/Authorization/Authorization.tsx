import React, {useState} from 'react';
import s from './Authorization.module.css';
import {initialStateAuthorizationType} from "../../../redax/Authorization-reducer";
import {SignUp} from "../../LoginizationPage/SignUp";
import {SignIn} from "../../LoginizationPage/SignIn";

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
                        <a className={s.button} onClick={onClickHandlerSignIn}>
                            Sign In
                        </a>
                        <a className={s.button} onClick={onClickHandlerSignUp}>
                            Sign Up
                        </a>
                    </>
                }
                {showSignIn && <SignIn setShowSignIn={setShowSignIn}/>}
                {showSignUp && <SignUp setShowSignUp={setShowSignUp}/>}
            </div>
        );
    }
;
