import React from "react";
import s from './Header.module.css';
import LogoHeader from "../../mini img/logoHEADER.jpg";


const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo}
                src={LogoHeader}/>
            <h2 className={s.nameHeader}>Pavel Social Network</h2>
        </header>
    )
}

export default Header;