import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {initialStateAuthorizationType, setAuthUserDataAC} from "../../redax/Authorization-reducer";
import Header from "./Header";
import axios from "axios";

type HeaderContainerType = {
    setShowTheme: (value: 'on' | 'off') => void
}

export const HeaderContainer = ({setShowTheme}: HeaderContainerType) => {

    let state = useSelector<AppStateType, initialStateAuthorizationType>(state => state.AuthorizationReducer);
    let dispatch = useDispatch();

    useEffect(() => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            }).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(response.data.data))
                }
            })
        }, []
    )

    return (
        <Header stateUser={state} setShowTheme={setShowTheme}/>
    )
}