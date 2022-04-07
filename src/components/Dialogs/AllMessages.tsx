import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import Messages from "./Message/Message";
import {AllMessagePropsType} from "./AllMessagesContainer";
import {InputForm} from "../SmallComponents/InputForm/InputForm";


export const AllMessages = (props: AllMessagePropsType) => {

    let messagesElements = props.renderMessages.map(m => <Messages key={m.id} message={m.message} id={m.id}/>);

    let addMessage = () => props.addMessage();

    let onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => props.onChangeMessage(e.currentTarget.value);

    return (
        <div className={s.main_messages_block}>
            <div className={s.messages}>
                {messagesElements}
                <InputForm value={props.messageText} onClickHandler={addMessage} onChangeHandler={onChangeMessage}/>
            </div>
        </div>
    );
};

