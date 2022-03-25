import React, {FC, useEffect, useState} from 'react';
import s from "./Burger.module.css";
import {NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {NavigateBarType} from "../../../redax/Navigate-reducer";
import {AppStateType} from "../../../redax/redux-store";

export const Burger = () => {

    const [showBurger, setShowBurger] = useState<boolean>(false);
    /*const {pathname} = useLocation();

    useEffect(() => {

      setShowBurger(!showBurger)

    }, [pathname]);*/

    return (
         <div className={s.headerParent}>
             {!showBurger
                 ? <BurgerOn showBurger={showBurger} setShowBurger={setShowBurger} />
                 : <BurgerOff showBurger={showBurger} setShowBurger={setShowBurger} />
             }
         </div>
    );
};


type BurgerOnType = {
    setShowBurger: (show :boolean) => void
    showBurger: boolean
}


const BurgerOn: FC<BurgerOnType> = ({setShowBurger, showBurger}) => {

    let state = useSelector<AppStateType, NavigateBarType[]>(state => state.NavigateBarReducer.navigateBar)

    const menuItems = state.map(el => (
        <NavLink key={el.alt} to={el.to} className={s.item} onClick={() => setShowBurger(!showBurger)}>
            <div className={s.item_div}>
                <img className={s.logo} src={el.srcImg} alt={el.alt}/>
                {el.nameOfPage}
            </div>
        </NavLink>));

    return (
        <div className={s.two_block} onClick={() => setShowBurger(!showBurger)}>
            <div className={s.two_block_two}>
                         <span className={s.spanOpenInvisible}/>
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
}

const BurgerOff: FC<BurgerOffType> = ({setShowBurger, showBurger}) => {
    return (
        <div onClick={() => setShowBurger(!showBurger)} className={s.one_block}>
            <span onClick={() => setShowBurger(!showBurger)} className={s.spanClosedInvisible}/>
        </div>
    )
}