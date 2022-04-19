import React from 'react';
import s from "./ArrowBackOrNext.module.css";
import {NavLink} from "react-router-dom";

type ArrowBackOrNextType = {
    path: string
    nameArrow: string
}

export const ArrowBackOrNext = ({path, nameArrow}: ArrowBackOrNextType) => {
    return (
            <NavLink to={path} className={s.arrow_container}>
                <div className={s.arrow}/>
                <div className={s.arrow}/>
                <div className={s.arrow}/>
                <div className={s.name_arrow}>{nameArrow}</div>
            </NavLink>
    );
};
