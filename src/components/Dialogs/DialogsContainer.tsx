import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redax/redux-store";
import {Dispatch} from "redux";
import {
    addMessageActionCreator,
    DialogType,
    MessageType,
    onChangeMessageActionCreator
} from "../../redax/Dialogs-reducer";

export type AllDialogsPropsType = MapDispatchToProps;

type MapDispatchToProps = {
    dialogs: Array<DialogType>
};

const MapStateToProps = (state: AppStateType): MapDispatchToProps => {
    return {
        dialogs: state.DialogsReducer.dialogs,
    }
}


export const DialogsContainer = connect(MapStateToProps)(Dialogs);
