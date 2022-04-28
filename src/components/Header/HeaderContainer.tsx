import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Reducers-Store/store";
import {initialStateAuthorizationType} from "../../Reducers-Store/Authorization-reducer";
import Header from "./Header";
import {ThemeType} from "../../App";

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

