import React, {useState} from 'react';
import s from "./Burger.module.css";

export const Burger = () => {

    const [showBurger, setShowBurger] = useState<boolean>(false);
    const [menuActive, setMenuActive] = useState<boolean>(false);

    return (
        <div className={s.headerParent}>
            {menuActive
                ? <div onClick={() => setMenuActive(!menuActive)}>
                    <span onClick={() => setShowBurger(!showBurger)} className={showBurger ? s.spanOpenInvisible : ""}/>
                </div>
                :
                <div>
                    <span onClick={() => setShowBurger(!showBurger)} className={showBurger ? s.spanClosedInvisible : ""}/>
                    <div className={s.block_burger_menu}>
                        <div className={s.headerChild}>
                            <a className={s.menuItem} href="#">Home</a>
                            <a className={s.menuItem} href="#">Skills</a>
                            <a className={s.menuItem} href="#">Freelance</a>
                            <a className={s.menuItem} href="#">Projects</a>
                            <a className={s.menuItem} href="#">Contact</a>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};