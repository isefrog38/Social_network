import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {initialStateAuthorizationType} from "../../redax/Authorization-reducer";
import Header from "./Header";
import {ThemeType} from "../../App";
import {AuthMeTC} from "../../Thunk/Login_Thunk";

type HeaderContainerType = {
    setShowTheme: (value: ThemeType) => void
    theme: ThemeType
}

export const HeaderContainer = ({setShowTheme, theme}: HeaderContainerType) => {

    let state = useSelector<AppStateType, initialStateAuthorizationType>(state => state.AuthorizationReducer);
    let dispatch = useDispatch();

    useEffect(() => {

        dispatch(AuthMeTC())

        }, [])


    return (
        <Header stateUser={state} setShowTheme={setShowTheme} theme={theme}/>
    )
}