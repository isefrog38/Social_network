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
import {ActionsType, RootStateType} from "./redax/state";

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<AppPropsType> = ({state, ...props}: AppPropsType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sideBar={state.sideBar}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path='/dialogs' element={
                        <Dialogs
                            dialogsPage={state.dialogsPage}
                            dispatch={props.dispatch}
                        />}/>
                    <Route path='/profile' element={
                        <Profile
                            myProfileData={state.myPostPage}
                            dispatch={props.dispatch}
                        />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/setting' element={<Setting/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
