import React  from "react";
import s from './Header.module.css';
import LogoHeader from "../../mini img/logoHEADER.jpg";
import {Burger} from "./Burger/Burger";
import {SearchPanel} from "./SearchPanel/SearchPanel";
import {Authorization} from "./Authorization/Authorization";
import {initialStateAuthorizationType} from "../../redax/Authorization-reducer";

type HeaderType = {
    stateUser: initialStateAuthorizationType
}

const TitlePage = () => {
    return <h2 className={s.nameHeader}>Pavel Social Network</h2>
};
const Logo = () => {
    return (
        <div className={s.logo_block}>
            <img className={s.logo}
                 src={LogoHeader}/>
        </div>
    )
};

const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <Logo />
            <Burger />
            <TitlePage />
            <SearchPanel />
            <Authorization stateUser={props.stateUser}/>
        </header>
    )
}

export default Header;