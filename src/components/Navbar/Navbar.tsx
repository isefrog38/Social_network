import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SideBar from "./SideBar/SideBar"
import {NavbarContainerProps} from "./NavbarContainer";
import imgProfile from "../../mini img/home.png";
import imgMessage from "../../mini img/message.png";
import imgNews from "../../mini img/News.png";
import imgMusic from "../../mini img/music.png";
import imgSettings from "../../mini img/setting.png";
import imgUser from "../../mini img/frend.png";

const Navbar = (props: NavbarContainerProps) => {

    const SideBarElement = props.sideBar.map(d => <SideBar key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>);

    return (
        <>
            <nav className={s.nav}>
                <div className={s.items}>
                    <div className={s.item_div}>
                        <img className={s.logo} src={imgProfile} alt={"img_profile"} />
                        <NavLink to='/profile' className={s.item} >Profile </NavLink>
                    </div>
                    <div className={s.item_div}>
                        <img className={s.logo} src={imgMessage} alt={"img_message"} />
                        <NavLink to='/dialogs' className={s.item} >Messages</NavLink>
                    </div>
                    <div className={s.item_div}>
                        <img className={s.logo} src={imgNews} alt={"img_news"} />
                        <NavLink to='/news' className={s.item} >News</NavLink>
                    </div>
                    <div className={s.item_div}>
                        <img className={s.logo} src={imgMusic} alt={"img_music"} />
                        <NavLink to='/music' className={s.item} >Music</NavLink>
                    </div>
                    <div className={s.item_div}>
                        <img className={s.logo} src={imgSettings} alt={"img_setting"} />
                        <NavLink to='/setting' className={s.item} >Setting</NavLink>
                    </div>
                     <p className={s.p}>
                    <div className={s.item_div}>
                        <img className={s.logo} src={imgUser} alt={"img_users"} />
                        <NavLink to='/users' className={s.item} >Find People</NavLink>
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