import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import {SideBarType} from "../../redax/state";

type NavBarPropsType = {
    sideBar: Array<SideBarType>
}

const Navbar = (props: NavBarPropsType) => {

    const SideBarElement = props.sideBar.map(d => <SideBar name={d.name} id={d.id} avatar={d.avatar}/>);

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
                        <h4>Best Friends</h4>
                        <div className={s.blockSideImg}>
                            {SideBarElement}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;