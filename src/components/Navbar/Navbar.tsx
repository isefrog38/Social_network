import React, {useState} from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {NavigateBarType} from "../../redax/Navigate-reducer";
import {SideBarType} from "../../redax/SideBar-reducer";
import BestFriends from "./BestFriends/Best-friends";

type NavbarPropsType = {
    sideBar: SideBarType[]
    navigateBar: NavigateBarType[]
}

export const Navbar = ({navigateBar, sideBar}: NavbarPropsType) => {

    const [active, setActive] = useState<string | null>('');

    const onClickHandler = (namePage: string) => setActive(namePage);

    const NavigateItems = navigateBar.map(el => (
        <NavLink key={el.alt} to={el.to} className={s.item} onClick={() => onClickHandler(el.nameOfPage)}>
            <div className={active === el.nameOfPage ? s.item_div_active : s.item_div}>
                <img className={s.logo} src={el.srcImg} alt={el.alt}/>
                {el.nameOfPage}
            </div>
        </NavLink>));

    return (
        <nav className={s.nav}>
            <div className={s.items}>
                {NavigateItems}             {/*NAVIGATION EL*/}
                <BestFriends sideBar={sideBar}/>
            </div>
        </nav>
    )
}
