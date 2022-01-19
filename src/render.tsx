import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import {state, addPost} from "./redax/state";

export let rerenderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={props.state} addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root")
    );
}
rerenderEntireTree();
reportWebVitals();

