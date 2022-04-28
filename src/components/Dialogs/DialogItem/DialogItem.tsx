import React, {memo} from "react";
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../Reducers-Store/Dialogs-reducer";

export const DialogItem = memo(({id, name, avatar}: DialogType) => {
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
})