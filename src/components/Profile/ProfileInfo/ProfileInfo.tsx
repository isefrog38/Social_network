import React from "react";
import s from './ProfileInfo.module.css'
import {AxiosResponseTypeProfile} from "../../../redax/Profile-reducer";
import {Preloader} from "../../Preloader/Preloader";

type ProfileInfoType = {
    profileState: null | AxiosResponseTypeProfile
}

export const ProfileInfo = (props: ProfileInfoType) => {
    let state = props.profileState;

    if(!state) return <Preloader />                // Preloader
    else return (

        <div className={s.main}>
            <div className={s.item}>
                <img className={s.image}
                    src='https://images.unsplash.com/photo-1625721838087-c46e51c89558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>


                <h3>{state.fullName}</h3>
                <div>{state.lookingForAJob}</div>
                <div>{state.lookingForAJobDescription}</div>
                <div className={s.descriptionsBlock}>
                    <div className={s.avatar}>
                        <img src={state.photos.large} alt={state.fullName}/>
                    </div>
                    <div>
                        {state.aboutMe}
                    </div>
                    <div>{state.contacts.vk}</div>
                    <div>{state.contacts.github}</div>
                    <div>{state.contacts.facebook}</div>
                    <div>{state.contacts.twitter}</div>
                    <div>{state.contacts.instagram}</div>
                </div>
            </div>
        </div>
    )
};