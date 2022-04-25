import React, {ChangeEvent} from 'react';
import s from "./InputForm.module.css";
import {ClearButton} from "../ClearButton/ClearButton";

type InputFormType = {
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onClickHandler: () => void
    value: string
    buttonName?: string
    placeholderName?: string
}

export const InputForm = ({onClickHandler, onChangeHandler, value, placeholderName, buttonName}: InputFormType) => {

    const defaultPlaceholder = "Введите сообщение";
    const defaultButtonName = 'Add Message';

    return (
        <div className={s.addMessageBlock}>
            <input
                className={s.inputAddMessage}
                placeholder={placeholderName ? placeholderName : defaultPlaceholder }
                onChange={(e) => onChangeHandler(e)}
                value={value}
            />
            <div className={s.buttonAddMessage}>
                <ClearButton onClick={onClickHandler} name={buttonName ? buttonName : defaultButtonName} disabled={!value}/>
            </div>
        </div>
    );
};
