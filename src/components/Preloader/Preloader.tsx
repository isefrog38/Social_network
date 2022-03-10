import React from 'react';
import s from "./Preloader.module.css";
import preloader from "../../mini img/preloader.svg";

export const Preloader = () => {
    return (
        <div className={s.main_block_preloader}>
            <img className={s.preloader} src={preloader}/>
        </div>
    );
};
