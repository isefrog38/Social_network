import React  from "react";
import s from './Header.module.css';
import LogoHeader from "../../mini img/logoHEADER.jpg";
import SearchIcon from "../../mini img/Search.png";
import {Burger} from "./Burger/Burger";


const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo_block}>
                <img className={s.logo}
                     src={LogoHeader}/>
            </div>

            <Burger />

            <h2 className={s.nameHeader}>Pavel Social Network</h2>
            <div className={s.search_panel_block}>
                <img className={s.icon_search} src={SearchIcon} alt="search_img"/>
                <input type="text" className={s.input} placeholder={"Search friend"}/>
            </div>
        </header>
    )
}

export default Header;