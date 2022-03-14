import React from 'react';
import s from "./Pages.module.css";

type PageType = {
    page: number
    activePage: number
    onClickHandler: (page: number) => void
}

export const Pages = (props: PageType) => {
    return (
        <div key={props.page}
             onClick={() => {
                 props.onClickHandler(props.page)
             }}
             className={props.activePage === props.page ? `${s.oneButtonPage} + ${s.active} ` : s.oneButtonPage}>
            <span className={props.activePage === props.page ? s.activeButtonPage : ""}>{props.page}</span>
        </div>
    )
};
