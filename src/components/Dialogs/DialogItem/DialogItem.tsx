import React from "react";
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name}: any) => {
    return (
        <div className={s.main_block}>
            <div>
                <img className={s.img}
                     src={'https://oir.mobi/uploads/posts/2021-05/1620197401_11-oir_mobi-p-karlikovii-kenguru-zhivotnie-krasivo-foto-14.jpg'}/>
            </div>
            <div className={s.dialog}>
                <NavLink to={`${id}`}>{name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem