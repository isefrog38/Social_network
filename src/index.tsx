import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {
    addMessage, addPost, RootStateType, subscriber,
    textMessageFromPost, updateNewPostText
} from "./redax/state";
import {state} from "./redax/state";


let rerenderEntireTree = (state: RootStateType) => {
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

rerenderEntireTree(state)
subscriber(rerenderEntireTree)

