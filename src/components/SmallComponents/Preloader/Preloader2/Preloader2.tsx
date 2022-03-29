import React from 'react';
import s from "./Preloader2.module.css";
import preloader from "../../../../Assets/mini img/loaders/Magnify-1s-200px.svg";

export const Preloader2 = () => {
    return (
        <div className={s.main_block_preloader}>
            <img className={s.preloader} src={preloader}/>
        </div>
    );
};
