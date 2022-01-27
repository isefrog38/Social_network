import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, RootStateType, textMessageFromPost, updateNewPostText} from "./redax/state";

type GlobalTypeRender = RootStateType

export let rerenderEntireTree = (state : GlobalTypeRender) => {
    ReactDOM.render(
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    addMessage={addMessage}
                    textMessageFromPost={textMessageFromPost}
                />
            </BrowserRouter>,
        document.getElementById("root")
    );
}

