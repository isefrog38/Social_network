import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import myPosts from "./components/Profile/MyPosts/MyPosts";

//MyPosts.tsx
export let myPostData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'American idol', likesCount: 30},
]

//Dialogs.tsx
export let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Artem'},
    {id: 6, name: 'Viktor'}
]

export let messages = [
    {id: 1, messages: 'Hi'},
    {id: 2, messages: 'How a you'},
    {id: 3, messages: 'Artem?'},
    {id: 4, messages: 'Yo'},
    {id: 5, messages: 'Artem?'},
    {id: 6, messages: 'sdjksdkjmn'}
]

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
