import React, {ChangeEvent} from 'react';
import s from "./InputForm.module.css";
import {ClearButton} from "../ClearButton/ClearButton";

type InputFormType = {
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onClickHandler: () => void
    value: string
}

export const InputForm = ({onClickHandler, onChangeHandler, value }: InputFormType) => {
    return (
        <div className={s.addMessageBlock}>
            <input
                className={s.inputAddMessage}
                placeholder={"Введите сообщение"}
                onChange={(e) => onChangeHandler(e)}
                value={value}
            />
            <div className={s.buttonAddMessage}>
                <ClearButton onClick={onClickHandler} name={'Add Message'} disabled={!value}/>
            </div>
        </div>
    );
};
