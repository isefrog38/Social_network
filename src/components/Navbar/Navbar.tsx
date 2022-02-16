import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SideBar from "./SideBar/SideBar"
import {NavbarContainerProps} from "./NavbarContainer";

const Navbar = (props: NavbarContainerProps) => {

    const SideBarElement = props.sideBar.map(d => <SideBar key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>);

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
                     <p className={s.p}>
                    <div className={s.item}>
                        <NavLink to='/users'>Find People</NavLink>
                    </div>
                     </p>
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