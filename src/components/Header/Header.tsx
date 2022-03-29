import React, {useState} from "react";
import s from './Header.module.css';
import LogoHeader from "../../Assets/mini img/logoHEADER.jpg";
import {Burger} from "./Burger/Burger";
import {Authorization} from "./Authorization/Authorization";
import {initialStateAuthorizationType} from "../../redax/Authorization-reducer";
import {SearchPanel} from "../SearchPanel/SearchPanel";
import {Theme} from "../SmallComponents/ThemeSelect/Theme";

type HeaderType = {
    stateUser: initialStateAuthorizationType
    setShowTheme: (value: 'on' | 'off') => void
}

const Header = (props: HeaderType) => {

    const [value, setValue] = useState<string>('')

    return (
        <header className={s.header}>
            <Logo/>
            <div className={s.burger}>
                <Burger/>
            </div>
            <TitlePage/>
            <Theme setShowTheme={props.setShowTheme}/>
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
                 src={LogoHeader}
                alt={"logo"}
            />
        </div>
    )
};

export default Header;