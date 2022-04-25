import React from 'react';
import s from "./GradientButton.module.css";


export const GradientButton = () => {
    return (
        <div className={s.main}>
            <div className={s.main_small_block}>
                <button className={s.button_redirect}>On</button>
            </div>
        </div>
    );
};