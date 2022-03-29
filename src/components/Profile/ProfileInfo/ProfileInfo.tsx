import React from "react";
import s from './ProfileInfo.module.css';
import {AxiosResponseTypeProfile} from "../../../redax/Profile-reducer";
import {RenameSpan} from "../../SmallComponents/RenameSpan/RenameSpanFunction";

const mainLogo = 'https://images.unsplash.com/photo-1625721838087-c46e51c89558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
const defaultAvatar = "https://as2.ftcdn.net/v2/jpg/03/08/68/53/1000_F_308685322_QENNJlJFHONQ8FVP2xVsiez6x1almqo2.jpg";

type ProfileInfoType = {
    statusTitle: string
    updateStatus: (status: string) => void
    profileState: null | AxiosResponseTypeProfile
}

export const ProfileInfo = ({profileState, updateStatus, statusTitle}: ProfileInfoType) => {
    let state = profileState;

    if (!state) return <></>
    else return (
        <div className={s.main}>
            <div className={s.item}>
                <div className={s.descriptionsBlock}>
                    <div className={s.avatar}>
                        <img className={s.avatar_mini}
                             src={state.photos.large !== null ? state.photos.large : defaultAvatar}
                             alt={state.fullName}/>
                    </div>
                    <div className={s.main_n_and_s}>
                        <div className={s.name_and_status_block}>
                            <h1 className={s.full_name}>{state.fullName}</h1>
                            <div className={s.status}>
                                <RenameSpan statusTitle={statusTitle}
                                            setTitle={updateStatus}/>
                            </div>
                        </div>
                        <div className={s.social_link}>
                            SOCIAL LINK
                            {/*
                            <div>{state.contacts.vk}</div>
                            <div>{state.contacts.github}</div>
                            <div>{state.contacts.facebook}</div>
                            <div>{state.contacts.twitter}</div>
                            <div>{state.contacts.instagram}</div>
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};