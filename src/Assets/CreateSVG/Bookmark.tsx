import React, {useState} from "react";
import s from "../../components/Music/RenderResultSearchMusic/MusicOneSong.module.css";
import {deleteBookmarksTrackAC, setBookmarksTrackAC} from "../../redax/Music-reduser";
import {useDispatch} from "react-redux";

type BookmarkType = {
    trackId: number
}

export const Bookmark = ({trackId}: BookmarkType) => {

    const [onSave, setOnSave] = useState<"save" | "notSave">("notSave");
    const dispatch = useDispatch();

    const onClickHandler = () => {
        if (onSave === "save") {
            setOnSave("notSave");
            dispatch(deleteBookmarksTrackAC(trackId));
        } else {
            setOnSave("save");
            dispatch(setBookmarksTrackAC(trackId));
        }
    }

    return (
        <div className={onSave !== "save" ? s.bookmark : s.bookmarkSave} onClick={onClickHandler}>
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