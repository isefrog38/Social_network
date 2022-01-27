import React from "react";
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://cdn.worldvectorlogo.com/logos/kangol.svg'/>
            <h2 className={s.nameHeader}>Selling kangaroos to Europe from Australia</h2>
        </header>
    )
}

export default Header;