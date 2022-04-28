import React from "react";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../Reducers-Store/store";
import {DialogReducerPageType} from "../../Reducers-Store/Dialogs-reducer";
import {useSelector} from "react-redux";
import {AuthRedirect} from "../../HOC/AuthRedirect";



const DialogsContainer = () => {

    const state = useSelector<AppStateType, DialogReducerPageType>( state => state.DialogsReducer);

    return <Dialogs dialogs={state.dialogs} />
};

export default AuthRedirect(DialogsContainer);