import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {addPost, RootStateType} from "./redax/state";

type GlobalTypeRender = RootStateType

export let rerenderEntireTree = (state : GlobalTypeRender) => {
    ReactDOM.render(
            <BrowserRouter>
                <App state={state} addPost={addPost}/>
            </BrowserRouter>,
        document.getElementById("root")
    );
}

