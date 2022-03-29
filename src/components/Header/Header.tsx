import React, {useContext, useState} from "react";
import s from './Header.module.css';
import LogoHeader from "../../Assets/mini img/logoHEADER.jpg";
import {Burger} from "./Burger/Burger";
import {Authorization} from "./Authorization/Authorization";
import {initialStateAuthorizationType} from "../../redax/Authorization-reducer";
import {SearchPanel} from "../SmallComponents/SearchPanel/SearchPanel";
import {Theme} from "../SmallComponents/ThemeSelect/Theme";
import {Context, ThemeType} from "../../App";

type HeaderType = {
    stateUser: initialStateAuthorizationType
    setShowTheme: (value: ThemeType) => void
    theme: ThemeType
}

const Header = (props: HeaderType) => {

    const theme = useContext(Context)
    const [value, setValue] = useState<string>('')

    return (
        <header className={theme === 'on' ? s.header : s.header_dark}>
            <Logo/>
            <div className={s.burger}>
                <Burger theme={props.theme}/>
            </div>
            <TitlePage/>
            <div className={s.search}>
                <SearchPanel
                    placeholderTitle={'Search friends'}
                    value={value}
                    type={'text'}
                    onChange={(e) => setValue(e.currentTarget.value)}
                />
            </div>
            <Theme setShowTheme={props.setShowTheme}/>
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