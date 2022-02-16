import React from 'react';
import s from "./SideBar.module.css";
import {NavLink} from "react-router-dom";
import {SideBarType} from "../../../redax/SideBar-reducer";


const SideBar = (props: SideBarType) => {
    return (
        <div className={s.allBlock}>
            <NavLink to={`/dialogs/${props.id}`}>
                <img className={s.img_left}
                     src={props.avatar}
                    alt={`logo_${props.id}`}/>
                <div className={s.name_friends}>{props.name}</div>
            </NavLink>
        </div>
    );
};

export default SideBar;