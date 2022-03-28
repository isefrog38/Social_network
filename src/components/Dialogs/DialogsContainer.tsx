import React from "react";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redax/redux-store";
import {DialogReducerPageType} from "../../redax/Dialogs-reducer";
import {useSelector} from "react-redux";


export const DialogsContainer = () => {

    const state = useSelector<AppStateType, DialogReducerPageType>( state => state.DialogsReducer)

    return (
        <Dialogs dialogs={state.dialogs}/>
    )
};
