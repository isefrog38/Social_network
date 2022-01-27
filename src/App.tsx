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
import {RootStateType} from "./redax/state";

type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    addMessage: (message: string) => void
    textMessageFromPost: (newMessage: string) => void
}

const App = ({state, ...props}: AppPropsType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sideBar={state.sideBar}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path='/dialogs' element={
                        <Dialogs
                            dialogs={state.dialogsPage.dialogs}
                            messages={state.dialogsPage.messages}
                            addMessage={props.addMessage}
                            textMessageFromPost={props.textMessageFromPost}
                            textMessage={state.dialogsPage.textMessage}
                        />}/>
                    <Route path='/profile' element={
                        <Profile
                            newPostText={state.myPostPage.newPostText}
                            updateNewPostText={props.updateNewPostText}
                            myPostData={state.myPostPage.myPostData}
                            addPost={props.addPost}
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
