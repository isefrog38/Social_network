import React, {ChangeEvent, FC} from 'react';
import s from "./SearchPanel.module.css";
import SearchIcon from "../../mini img/Search.png";

type SearchPanelType = {
    placeholderTitle: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
    type: string
}

export const SearchPanel: FC<SearchPanelType> = ({placeholderTitle, value, type, onChange}) => {
    return (
        <>
            <div className={s.search_panel_block}>
                <img className={s.icon_search} src={SearchIcon} alt="search_img"/>
                <input
                    type={type}
                    className={s.input}
                    placeholder={placeholderTitle}
                    value={value}
                    onChange={(e) => onChange(e)}
                />
            </div>
        </>
    );
};
