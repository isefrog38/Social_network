import React from 'react';
import s from "./ClearButton.module.css";

type ClearButtonType = {
    name: string
    disabled: boolean
    onClick: () => void
}

export const ClearButton = ({name, onClick, disabled}:ClearButtonType) => {
    return (
        <>
            <button
                onClick={onClick}
                disabled={disabled}
                className={s.buttonAddMessages}
            >
                {name}
            </button>
        </>
    );
};
