import React from "react";
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redax/Dialogs-reducer";

const DialogItem = ({id, name, avatar}: DialogType) => {
    return (
        <div className={s.main_block}>
            <div>
                <NavLink to={`${id}`}>
                    <img className={s.img} src={avatar}/>
                </NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to={`${id}`}>{name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem