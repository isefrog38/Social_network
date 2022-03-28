import React, {useState} from 'react';
import s from "./Theme.module.css";
import sun from "../../../Assets/mini img/sun.png";
import moon from "../../../Assets/mini img/moon.png";

export const Theme = () => {

    const [showTheme, setShowTheme] = useState<boolean>(false);


    const toggle = document.getElementById('toggle');
    const body = document.body;

    if (toggle) {
        toggle.addEventListener('input', (e) => {
            if (showTheme) {
                body.classList.add('dark-theme');
            } else {
                body.classList.remove('dark-theme');
            }
        });
    }


    const onClickHandler = () => {
        if (showTheme) {
            return setShowTheme(false)
        }
        return setShowTheme(true)
    }

    return (
        <div>
            <div className={s.toggle}>
                <input type="checkbox" id="toggle"/>
                <label htmlFor="toggle" onClick={onClickHandler}>
                    {showTheme
                        ? <div className={s.main_image_sun}><img src={sun} alt={"sun"} className={s.image}/></div>
                        : <div className={s.main_image_moon}><img src={moon} alt={"moon"} className={s.image}/></div>
                    }
                </label>
            </div>
        </div>
    );
};
