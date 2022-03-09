import React from "react";
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoj5hA3jRmBOK-Un1RDWPRz1ymZwRp2lZZ0A&usqp=CAU'/>
            <h2 className={s.nameHeader}>Pavel Social Network</h2>
        </header>
    )
}

export default Header;