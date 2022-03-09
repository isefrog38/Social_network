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
                <div className={s.items}>
                    <div className={s.item_div}>
                        <NavLink to='/profile' className={s.item} >Profile </NavLink>
                    </div>
                    <div className={s.item_div}>
                        <NavLink to='/dialogs' className={s.item} >Messages</NavLink>
                    </div>
                    <div className={s.item_div}>
                        <NavLink to='/news' className={s.item} >News</NavLink>
                    </div>
                    <div className={s.item_div}>
                        <NavLink to='/music' className={s.item} >Music</NavLink>
                    </div>
                    <div className={s.item_div}>
                        <NavLink to='/setting' className={s.item} >Setting</NavLink>
                    </div>
                     <p className={s.p}>
                    <div className={s.item_div}>
                        <NavLink to='/users' className={s.item_div} >Find People</NavLink>
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