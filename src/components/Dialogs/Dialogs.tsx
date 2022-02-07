import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import {ActionsType, DialogPageType} from "../../redax/state";
import {AllMessages} from "./AllMessages";

type DialogsPropsType = {
    dialogsPage: DialogPageType
    dispatch: (action: ActionsType) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(
        d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <AllMessages
                    messageText={props.dialogsPage.textMessage}
                    renderMessages={props.dialogsPage.messages}
                    dispatch={props.dispatch}
                />
            </div>

        </div>
    )
}

export default Dialogs