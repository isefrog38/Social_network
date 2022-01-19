import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Setting";
import {Routes, Route} from "react-router-dom";
import {state} from "./redax/state";

const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sideBar={state.sideBar}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}/>}/>
                    <Route path='/profile' element={<Profile
                        myPostData={state.myPostPage.myPostData}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/setting' element={<Setting/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
