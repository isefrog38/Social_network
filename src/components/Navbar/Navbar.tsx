import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SideBar from "./SideBar/SideBar"
import {NavbarContainerProps} from "./NavbarContainer";

export const Navbar = (props: NavbarContainerProps) => {

    const SideBarElement = props.sideBar.map(d => <SideBar key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>);
    const NavigateItems = props.navigateBar.map(el => (
        <NavLink to={el.to} className={s.item}>
            <div className={s.item_div}>
                <img className={s.logo} src={el.srcImg} alt={el.alt}/>
                {el.nameOfPage}
            </div>
        </NavLink>));

    return (
        <nav className={s.nav}>
            <div className={s.items}>
                {NavigateItems}
                <div className={s.sideBar}>
                    <h4>Best Friends</h4>
                    <div className={s.blockSideImg}>
                        {SideBarElement}
                    </div>
                </div>
            </div>
        </nav>
    )
}
