import React, {ChangeEvent, FC, useState} from 'react';
import s from "./SearchPanel.module.css";
import SearchIcon from "../../../Assets/mini img/Search.png";

type SearchPanelType = {
    placeholderTitle: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
    type: string
    onClickHandler?: () => void
}

export const SearchPanel: FC<SearchPanelType> = ({placeholderTitle, value, type, onChange, onClickHandler}) => {

    const [error, setError] = useState<string>('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e)
    }
    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (error.trim() !== '') setError('')
        if (e.ctrlKey || e.key === "Enter") {
            onClickHandler && onClickHandler()
        } else {
            setError('error')
        }
    }

    return (
        <>
            <div className={s.search_panel_block}>
                <img className={s.icon_search} src={SearchIcon} alt="search_img"/>
                <input
                    type={type}
                    className={s.input}
                    placeholder={placeholderTitle}
                    value={value}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPress}
                />
            </div>
        </>
    );
};
