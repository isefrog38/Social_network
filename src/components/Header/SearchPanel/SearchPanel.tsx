import React from 'react';
import s from "./SearchPanel.module.css";
import SearchIcon from "../../../mini img/Search.png";

export const SearchPanel = () => {
    return (
        <>
            <div className={s.search_panel_block}>
                <img className={s.icon_search} src={SearchIcon} alt="search_img"/>
                <input type="text" className={s.input} placeholder={"Search friend"}/>
            </div>
        </>
    );
};
