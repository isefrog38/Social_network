import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import {AllDialogsPropsType} from "./DialogsContainer";
import {AllMessagesContainer} from "./AllMessagesContainer";

const Dialogs = (props: AllDialogsPropsType) => {

    let dialogsElements = props.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>);

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <AllMessagesContainer />
            </div>
        </div>
    )
}

export default Dialogs