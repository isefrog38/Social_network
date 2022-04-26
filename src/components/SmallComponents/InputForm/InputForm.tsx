import React, {ChangeEvent, useState} from 'react';
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

    const [error, setError] = useState<string>('');

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (error.trim() !== '') setError('')
        if (e.ctrlKey || e.key === "Enter") {
            onClickHandler && onClickHandler()
        } else {
            setError('error')
        }
    }

    const defaultPlaceholder = "Введите сообщение";
    const defaultButtonName = 'Add Message';

    return (
        <div className={s.addMessageBlock}>
            <input
                className={s.inputAddMessage}
                onKeyPress={onKeyPress}
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
