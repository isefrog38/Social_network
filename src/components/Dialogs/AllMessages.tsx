import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import Messages from "./Message/Message";
import {AllMessagePropsType} from "./AllMessagesContainer";


export const AllMessages = (props: AllMessagePropsType) => {

    let messagesElements = props.renderMessages.map(m => <Messages key={m.id} message={m.message} id={m.id}/>);

    let addMessage = () => {
        props.addMessage()
    }

    let onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value;
        props.onChangeMessage(text)
    }

    return (
        <div className={s.main_messages_block}>
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

