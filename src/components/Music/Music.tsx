import React, {ChangeEvent, useState} from "react";
import s from './Music.module.css'
import {AuthRedirect} from "../../HOC/AuthRedirect";
import {useDispatch, useSelector} from "react-redux";
import {MusicInitialStateType} from "../../redax/Music-reduser";
import {AppStateType} from "../../redax/redux-store";
import {MusicTC} from "../../Thunk/Music_Thunk";


const Music = () => {

    const [value, setValue] = useState<string>('');
    const [show, setShow] = useState<boolean>(false);
    const [photo, setPhoto] = useState<string>('');
    const state = useSelector<AppStateType, MusicInitialStateType>(state => state.MusicReducer);
    const dispatch = useDispatch();

    const newState = state.data.data.map(el => (
        <div>
            {el.name}
        </div>
    ))

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    };

    const onClick = () => {
        dispatch(MusicTC(value));
    };
    const onClick2 = () => {
        setShow(!show);
    };



    return (
        <div>
            <h3>{value}</h3>
            <input type="text" onChange={onChange}/>
            <button onClick={onClick}>GO</button>
            <button onClick={onClick2}>Show</button>

            <hr />
            {show && <img src={state.data.data[0].pictures["320wx320h"]} alt="asd"/>}
            {newState}
        </div>
    )
}

export default AuthRedirect(Music);
