import React, {useState} from "react";
import s from './Header.module.css';
import LogoHeader from "../../mini img/logoHEADER.jpg";
import {Burger} from "./Burger/Burger";
import {SearchPanel} from "../SearchPanel/SearchPanel";
import {Authorization} from "./Authorization/Authorization";
import {initialStateAuthorizationType} from "../../redax/Authorization-reducer";

type HeaderType = {
    stateUser: initialStateAuthorizationType
}

const Header = (props: HeaderType) => {

    const [value, setValue] = useState('')

    return (
        <header className={s.header}>
            <Logo />
            <div className={s.burger}>
                <Burger />
            </div>
            <TitlePage />
            <div className={s.search}>
                <SearchPanel
                    placeholderTitle={'Search friends'}
                    value={value}
                    type={'text'}
                    onChange={(e) => setValue(e.currentTarget.value)}
                />
            </div>
            <Authorization stateUser={props.stateUser}/>
        </header>
    )
};

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

export default Header;