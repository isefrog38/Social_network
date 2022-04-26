import React, {ChangeEvent, useEffect, useState} from "react";
import s from './Music.module.css'
import {AuthRedirect} from "../../HOC/AuthRedirect";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redax/store";
import {MusicInitialStateType} from "../../redax/Music-reduser";
import {MusicTC} from "../../Thunk/Music_Thunk";
import {InputForm} from "../SmallComponents/InputForm/InputForm";
import {MusicResults} from "./RenderResultSearchMusic/MusicResults";


const Music = () => {
    const [value, setValue] = useState<string>('');
    const state = useSelector<AppStateType, MusicInitialStateType>(state => state.MusicReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(MusicTC("top 100"))
    }, [])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    };

    const onClick = () => {
        dispatch(MusicTC(value));
    };

    return (
        <div className={s.rootDiv}>
            <div className={s.inputBlock}>
                <InputForm onChangeHandler={onChange}
                           onClickHandler={onClick}
                           value={value}
                           placeholderName={"Search Song"}
                           buttonName={"Search"}
                />
            </div>

            {state.results.length !== 0 && <MusicResults state={state.results} trackInfo={state.showInfo}/>}
        </div>
    )
}

export default AuthRedirect(Music);
