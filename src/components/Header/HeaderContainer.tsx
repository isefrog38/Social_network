import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {initialStateAuthorizationType} from "../../redax/Authorization-reducer";
import Header from "./Header";
import {ThemeType} from "../../App";
import {AuthRedirect} from "../../HOC/AuthRedirect";

type HeaderContainerType = {
    setShowTheme: (value: ThemeType) => void
    theme: ThemeType
}

export const HeaderContainer = ({setShowTheme, theme}: HeaderContainerType) => {

    let state = useSelector<AppStateType, initialStateAuthorizationType>(state => state.AuthorizationReducer);


    return (
        <Header stateUser={state} setShowTheme={setShowTheme} theme={theme}/>
    )
}

/*
export default AuthRedirect(HeaderContainer);*/
