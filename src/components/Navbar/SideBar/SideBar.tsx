import React from 'react';
import s from "./SideBar.module.css";
import {NavLink} from "react-router-dom";

const SideBar = ({id}: any) => {
    return (
        <>
        <div className={s.text}>
            <h4>Best Friends</h4>
        </div>
        <div className={s.allBlock}>
            <NavLink to={`/dialogs${id}`}>
                <img className={s.img_right}
                    src={'https://oir.mobi/uploads/posts/2021-05/1620197401_11-oir_mobi-p-karlikovii-kenguru-zhivotnie-krasivo-foto-14.jpg'} />
                <div className={s.name_friends}>Коля Пупкин</div>
            </NavLink>
            <NavLink to={`/dialogs/${id}`}>
                <img className={s.img_center}
                    src={'https://zelenyjmir.ru/wp-content/uploads/2017/06/Kenguru-40.jpg'} />
                <div className={s.name_friends}>Алекс Утка</div>
            </NavLink>
            <NavLink to={`/dialogs/${id}`}>
                <img className={s.img_left}
                    src={'https://yaizakon.com.ua/wp-content/uploads/2019/10/1427402253_kenguru5-e1480942003641.jpg'} />
                <div className={s.name_friends}>Леня Демидов</div>
            </NavLink>
        </div>
        </>
    );
};

export default SideBar;