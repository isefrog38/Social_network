import React, {createContext, useState} from "react";
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Setting";
import {Routes, Route, Navigate} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/FindUsers/UsersContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {useSelector} from "react-redux";
import {AppStateType} from "./redax/redux-store";
import {initialStateAuthorizationType} from "./redax/Authorization-reducer";
import {MovieContainer} from "./components/Movies";

export const Context = createContext('on');

export const App = () => {

    let {id} = useSelector<AppStateType, initialStateAuthorizationType>(state => state.AuthorizationReducer);
    const [showTheme, setShowTheme] = useState<'on' | 'off'>('on');

    return (
        <Context.Provider value={showTheme}>
            <div className={showTheme === "on" ? "App" : "App_dark"}>
                <HeaderContainer setShowTheme={setShowTheme}/>
                <div className='app-wrapper'>
                    <NavbarContainer/>
                    <div className={'app-wrapper-content'}>
                        <Routes>
                            <Route path={'/'} element={<Navigate to={'/profile'}/>}/> {/*my profile 22589*/}
                            {id && <Route path={'/profile'} element={<Navigate to={`/profile/${id}`}/>}/>}
                            <Route path='/dialogs' element={<DialogsContainer/>}/>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/movies' element={<MovieContainer/>}/>
                            <Route path='/settings' element={<Setting/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Context.Provider>
    )
};
