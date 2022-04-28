import React, {FC, useState} from 'react';
import s from "./Burger.module.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {NavigateBarType} from "../../../Reducers-Store/Navigate-reducer";
import {AppStateType} from "../../../Reducers-Store/store";
import {ThemeType} from "../../../App";

type BurgerType = {
    theme: ThemeType
}

export const Burger = ({theme}: BurgerType) => {

    const [showBurger, setShowBurger] = useState<boolean>(false);

    return (
         <div className={s.headerParent}>
             {showBurger
                 ? <BurgerOn showBurger={showBurger} setShowBurger={setShowBurger} theme={theme}/>
                 : <BurgerOff showBurger={showBurger} setShowBurger={setShowBurger} theme={theme}/>
             }
         </div>
    );
};


type BurgerOnType = {
    setShowBurger: (show :boolean) => void
    showBurger: boolean
    theme: ThemeType
}


const BurgerOn: FC<BurgerOnType> = ({setShowBurger, showBurger, theme}) => {

    let state = useSelector<AppStateType, NavigateBarType[]>(state => state.NavigateBarReducer.navigateBar)

    const menuItems = state.map(el => (
        <NavLink key={el.alt} to={el.to} className={s.item} onClick={() => setShowBurger(!showBurger)} >
            <div className={s.item_div}>
                <img className={s.logo} src={el.srcImg} alt={el.alt}/>
                {el.nameOfPage}
            </div>
        </NavLink>));


    return (
        <div className={s.two_block} onClick={() => setShowBurger(!showBurger)} onBlur={() => setShowBurger(!showBurger)}>
            <div className={theme === 'on' ? s.two_block_two : s.two_block_two_dark}>
                         <span className={theme === 'on' ? s.spanOpenInvisible : s.spanOpenInvisible_dark}/>
            </div>
            <div className={s.block_burger_menu}>
                <div className={s.menu_items}>
                    {menuItems}  {/* items*/}
                </div>
            </div>
        </div>
    )
}

type BurgerOffType = {
    setShowBurger: (show :boolean) => void
    showBurger: boolean
    theme: ThemeType
}

const BurgerOff: FC<BurgerOffType> = ({setShowBurger, showBurger, theme}) => {

    return (
        <div onClick={() => setShowBurger(!showBurger)} className={s.one_block}>
            <span onClick={() => setShowBurger(!showBurger)} className={theme === 'on' ? s.spanClosedInvisible : s.spanClosedInvisible_dark}/>
        </div>
    )
}