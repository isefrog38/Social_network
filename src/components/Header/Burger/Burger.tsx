import React, {useState} from 'react';
import s from "./Burger.module.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {NavigateBarType} from "../../../redax/Navigate-reducer";
import {AppStateType} from "../../../redax/redux-store";

export const Burger = () => {

    let state = useSelector<AppStateType, NavigateBarType[]>(state => state.NavigateBarReducer.navigateBar)

    const [showBurger, setShowBurger] = useState<boolean>(false);
    /*const [menuActive, setMenuActive] = useState<boolean>(false);*/

    const menuItems = state.map(el => (
        <NavLink to={el.to} className={s.item}>
            <div className={s.item_div}>
                <img className={s.logo} src={el.srcImg} alt={el.alt}/>
                {el.nameOfPage}
            </div>
        </NavLink>));

    return (
        <div className={s.headerParent}>
            {!showBurger
                ? <div onClick={() => setShowBurger(!showBurger)} className={s.one_block}>
                    <span onClick={() => setShowBurger(!showBurger)} className={s.spanClosedInvisible}/>
                </div>
                :
                <div className={s.two_block}>
                    <div className={s.two_block_two}>
                        <span onClick={() => setShowBurger(!showBurger)}
                              className={s.spanOpenInvisible}/>
                    </div>
                    <div className={s.block_burger_menu}>
                        <div className={s.menu_items}>
                            {menuItems}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};