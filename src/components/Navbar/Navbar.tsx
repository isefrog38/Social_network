import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

// const satActive = {isActive => isActive ? 's.active' : ''}

const Navbar = () => {
    return (
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
            </div>
        </nav>
    )
}

export default Navbar;