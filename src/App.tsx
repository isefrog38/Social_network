import React, {createContext, lazy, useEffect, useState} from "react";
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./Reducers-Store/store";
import {initialStateAuthorizationType} from "./Reducers-Store/Authorization-reducer";
import {AuthMeTC} from "./Thunk/Login_Thunk";
// import News from "./components/News/News";
// import Music from "./components/Music/Music";
// import SignIn from "./components/LoginizationPage/SignIn/SignIn";
// import {NewsContainer} from "./components/News/NewsContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/FindUsers/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import SignUp from "./components/LoginizationPage/SignUp/SignUp";
import MovieContainer from "./components/Movies/MovieContainer";
import {Preloader} from "./components/SmallComponents/Preloader/Preloader";
import SettingsContainer from "./components/Settings/SettingsContainer";

/*LAZY LOADING*/
const News = lazy(() => import('./components/News/News'));
const NewsContainer = lazy(() => import('./components/News/NewsContainer'));
const Music = lazy(() => import('./components/Music/Music'));
const SignIn = lazy(() => import('./components/LoginizationPage/SignIn/SignIn'));
/*END LAZY LOADING*/

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
                            <Route path='/movies' element={<MovieContainer/>}/>
                            <Route path='/settings' element={<SettingsContainer/>}/>
                            <Route path='/signUp' element={<SignUp theme={showTheme}/>}/>
                            <Route path='/signIn' element={
                                <React.Suspense fallback={<Preloader />} >
                                    <SignIn theme={showTheme} />
                                </React.Suspense>
                            }/>
                            <Route path='/news' element={
                                <React.Suspense fallback={<Preloader />} >
                                    <News/>
                                </React.Suspense>
                            }/>
                            <Route path='/news/:newsId' element={
                                <React.Suspense fallback={<Preloader />} >
                                    <NewsContainer/>
                                </React.Suspense>
                            }/>
                            <Route path='/music' element={
                                <React.Suspense fallback={<Preloader />} >
                                    <Music/>
                                </React.Suspense>
                            }/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Context.Provider>
    )
};
