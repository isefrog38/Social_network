import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {initialStateAuthorizationType} from "../../redax/Authorization-reducer";
import Setting from "./Setting";

export const SettingsContainer = () => {

    let state = useSelector<AppStateType, initialStateAuthorizationType>(state => state.AuthorizationReducer);

    return <Setting stateAuth={state}/>
};
