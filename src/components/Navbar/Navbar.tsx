import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import {NavigateBarType} from "../../redax/Navigate-reducer";
import {SideBarType} from "../../redax/SideBar-reducer";

type NavbarPropsType = {
    sideBar: SideBarType[]
    navigateBar: NavigateBarType[]
}

export const Navbar = (props: NavbarPropsType) => {

    const SideBarElement = props.sideBar.map(d => <SideBar key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>);
    const NavigateItems = props.navigateBar.map(el => (
        <NavLink key={el.alt} to={el.to} className={s.item}>
            <div className={s.item_div}>
                <img className={s.logo} src={el.srcImg} alt={el.alt}/>
                {el.nameOfPage}
            </div>
        </NavLink>));

    return (
        <nav className={s.nav}>
            <div className={s.items}>
                {NavigateItems}             {/*NAVIGATION EL*/}
                <div className={s.sideBar}>
                    <h4>Best Friends</h4>
                    <div className={s.blockSideImg}>
                        {SideBarElement}                 {/*SIDEBAR EL*/}
                    </div>
                </div>
            </div>
        </nav>
    )
}
