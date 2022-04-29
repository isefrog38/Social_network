import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../Reducers-Store/store";
import {initialStateAuthorizationType} from "../../Reducers-Store/Authorization-reducer";
import Setting from "./Setting";

const SettingsContainer = () => {

    let state = useSelector<AppStateType, initialStateAuthorizationType>(state => state.AuthorizationReducer);

    return <Setting stateAuth={state}/>
};

export default SettingsContainer;