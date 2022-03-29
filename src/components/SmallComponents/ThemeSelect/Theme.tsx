import React, {useContext} from 'react';
import s from "./Theme.module.css";
import sun from "../../../Assets/mini img/sun.png";
import moon from "../../../Assets/mini img/moon.png";
import {Context, ThemeType} from "../../../App";

type ThemesType = {
    setShowTheme: (value: ThemeType) => void
}

export const Theme = ({setShowTheme}: ThemesType) => {

    const showTheme = useContext(Context);
    
    const onClickHandler = () => {
        if (showTheme === 'on') return setShowTheme('off')
        setShowTheme('on')
    }

    return (
        <div>
            <div className={s.toggle}>
                <input type="checkbox" id="toggle" value={showTheme}/>
                <label htmlFor="toggle" onClick={onClickHandler}>
                    {showTheme !== 'off'
                        ? <div className={s.main_image_sun}><img src={sun} alt={"sun"} className={s.image}/></div>
                        : <div className={s.main_image_moon}><img src={moon} alt={"moon"} className={s.image}/></div>
                    }
                </label>
            </div>
        </div>
    );
};
