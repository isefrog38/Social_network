import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import Messages from "./Message/Message";
import {ActionsType, MessageType} from "../../redax/state";
import {addMessageActionCreator, onChangeMessageActionCreator} from "../../redax/Dialogs-reducer";

type AllMessagesType = {
    messageText: string
    renderMessages: Array<MessageType>
    dispatch: (action: ActionsType) => void
}

export const AllMessages = (props: AllMessagesType) => {

    let messagesElements = props.renderMessages.map(m => <Messages message={m.message} id={m.id}/>);

    let addMessage = () => {
        props.dispatch( addMessageActionCreator() )
    }

    let onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value;
        props.dispatch(onChangeMessageActionCreator(text))
    }

    return (
        <div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.addMessageBlock}>
                    <input
                        className={s.inputAddMessage}
                        placeholder={"Введите сообщение"}
                        onChange={onChangeMessage}
                        value={props.messageText}
                    />
                    <div className={s.buttonAddMessage}>
                        <button
                            onClick={addMessage}
                            disabled={!props.messageText}
                            className={s.buttonAddMessages}>
                            Add Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

