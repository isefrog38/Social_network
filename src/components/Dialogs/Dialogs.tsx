import React, {ChangeEvent, RefObject} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import {DialogPageType} from "../../redax/state";

type DialogsPropsType = DialogPageType & {
    addMessage: (message: string) => void
    textMessageFromPost: (newMessage: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.messages.map(m => <Messages message={m.message} id={m.id}/>);

    let addMessage = () => {
        let text = props.textMessage;
        if (text) {
            props.addMessage(text);
        }
    }

    let onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        if (text) {
            props.textMessageFromPost(text)
        }
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div className={s.addMessageBlock}>
                        <input
                            className={s.inputAddMessage}
                            placeholder={"Введите сообщение"}
                            onChange={onChangeMessage}
                            value={props.textMessage}
                        />
                        <div className={s.buttonAddMessage}>
                            <button
                                onClick={addMessage}
                                disabled={!props.textMessage}
                                className={s.buttonAddMessages}>
                                Add Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs