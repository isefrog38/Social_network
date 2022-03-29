import React, {ChangeEvent, memo, useState} from 'react';
import s from "./RenameSpan.module.css";

type TodoListHeaderPropsType = {
    statusTitle: string
    setTitle: ( title: string) => void
}

export const RenameSpan = memo(({statusTitle, setTitle}: TodoListHeaderPropsType) => {

    const [newTitle, setNewTitle] = useState<string>(statusTitle);
    const [show, setShowInput] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const maxLengthInInput = 85;

    const onClick = () => setShowInput(!show)
    const onBlurHandler = () => {
        setTitle(newTitle)
        setShowInput(!show)
    };
    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (error.trim() !== '') setError('')
        if (e.ctrlKey || e.key === "Enter") {
            onBlurHandler()
        } else {
            setError('bla bla')
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.currentTarget.value)

    return (
        show
            ? <input
                onKeyPress={onKeyPress}
                className={s.input_block} value={newTitle}
                onChange={ onChangeHandler }
                autoFocus onBlur={ onBlurHandler }
                maxLength={maxLengthInInput}
            />
            : <span
                className={s.text_block}
                onDoubleClick={ onClick }
            >
                {statusTitle}
        </span>

    );
});

