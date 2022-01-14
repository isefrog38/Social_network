import React from "react";
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = ({id , name}: any) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`${id}`}>{name}</NavLink>
        </div>
    )
}

export default DialogItem