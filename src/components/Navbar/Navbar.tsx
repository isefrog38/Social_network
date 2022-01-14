import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const Navbar = () => {
    return (
        <>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to='/profile'>Profile </NavLink>
                    <div className={s.item}>
                        <NavLink to='/dialogs'>Messages</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/news'>News</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/music'>Music</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/setting'>Setting</NavLink>
                    </div>
                    <div className={s.sideBar}>
                        <SideBar id={1}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;