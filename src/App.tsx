import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Setting";
import {Routes, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/FindUsers/UsersContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";


const App = () => {

    return (
        <div className={"App"}>
            <Header/>
            <div className='app-wrapper'>
                <NavbarContainer/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/dialogs' element={
                            <DialogsContainer/>}/>
                        <Route path='/profile' element={
                            <Profile/>}/>
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
