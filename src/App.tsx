import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Setting";
import {Routes, Route, Navigate} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/FindUsers/UsersContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <div className={"App"}>
            <Header/>
            <div className='app-wrapper'>
                <NavbarContainer/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                        <Route path='/dialogs' element={
                            <DialogsContainer/>}/>
                        <Route path='/profile' element={
                            <ProfileContainer/>}/>
                        <Route path='/users' element={
                            <UsersContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/setting' element={<Setting/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App;
