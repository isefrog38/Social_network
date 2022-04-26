import React, {useState} from "react";
import s from "../../components/Music/RenderResultSearchMusic/MusicOneSong.module.css";

export const Bookmark = () => {

    const [onSave, setOnSave] = useState<boolean>(false);

    const onClickHandler = () => {
        setOnSave(!onSave);
    }

    return (
        <div className={!onSave ? s.bookmark : s.bookmarkSave} onClick={onClickHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#faa800" height="24"
                 viewBox="0 0 24 24"
                 width="24">
                <path
                    d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
        </div>
    )
}