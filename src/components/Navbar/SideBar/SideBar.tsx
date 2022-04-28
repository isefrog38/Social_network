import React from 'react';
import s from "./SideBar.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../Reducers-Store/Dialogs-reducer";


const SideBar = (props: DialogType) => {
    return (
        <div className={s.allBlock}>
            <NavLink to={`/dialogs/${props.id}`} className={s.navlink}>
                <img className={s.img_left}
                     src={props.avatar}
                    alt={`logo_${props.id}`}/>
                <div className={s.name_friends}>{props.name}</div>
            </NavLink>
        </div>
    );
};

export default SideBar;