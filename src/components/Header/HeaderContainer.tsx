import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {initialStateAuthorizationType, setAuthUserDataAC} from "../../redax/Authorization-reducer";
import Header from "./Header";
import {UsersAPI} from "../../Api/Api";
import {ThemeType} from "../../App";

type HeaderContainerType = {
    setShowTheme: (value: ThemeType) => void
    theme: ThemeType
}

export const HeaderContainer = ({setShowTheme, theme}: HeaderContainerType) => {

    let state = useSelector<AppStateType, initialStateAuthorizationType>(state => state.AuthorizationReducer);
    let dispatch = useDispatch();

    useEffect(() => {
        UsersAPI.AuthUser()
            .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataAC(data.data))
            }
        })
        }, [])


    return (
        <Header stateUser={state} setShowTheme={setShowTheme} theme={theme}/>
    )
}