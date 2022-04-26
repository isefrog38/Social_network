import React, {createContext, useEffect, useState} from "react";
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Routes, Route, Navigate} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/FindUsers/UsersContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redax/store";
import {initialStateAuthorizationType} from "./redax/Authorization-reducer";
import SignIn from "./components/LoginizationPage/SignIn/SignIn";
import {SignUp} from "./components/LoginizationPage/SignUp/SignUp";
import MovieContainer from "./components/Movies/MovieContainer";
import {AuthMeTC} from "./Thunk/Login_Thunk";
import {SettingsContainer} from "./components/Settings/SettingsContainer";
import {NewsContainer} from "./components/News/NewsContainer";

export const Context = createContext('on');
export type ThemeType = 'on' | 'off';

export const App = () => {

    let dispatch = useDispatch();

    useEffect(() => {

        dispatch(AuthMeTC())

    }, [])

    let {id} = useSelector<AppStateType, initialStateAuthorizationType>(state => state.AuthorizationReducer);
    let {isAuth} = useSelector<AppStateType, initialStateAuthorizationType>(state => state.AuthorizationReducer);
    const [showTheme, setShowTheme] = useState<ThemeType>('on');

    return (
        <Context.Provider value={showTheme}>
            <div className={showTheme === "on" ? "App" : "App_dark"}>
                { isAuth && <HeaderContainer setShowTheme={setShowTheme} theme={showTheme}/> }
                <div className='app-wrapper'>
                    { isAuth && <NavbarContainer/> }
                    <div className={'app-wrapper-content'}>
                        <Routes>
                            <Route path={'/'} element={<Navigate to={'/news'}/>}/> {/* default page */}

                            {id && <Route path={'/profile'} element={<Navigate to={`/profile/${id}`}/>}/>} {/* my page */}

                            <Route path='/dialogs' element={<DialogsContainer/>}/>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/news/:newsId' element={<NewsContainer/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/movies' element={<MovieContainer/>}/>
                            <Route path='/settings' element={<SettingsContainer/>}/>
                            <Route path='/signIn' element={<SignIn theme={showTheme} />}/>
                            <Route path='/signUp' element={<SignUp theme={showTheme} />}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Context.Provider>
    )
};
