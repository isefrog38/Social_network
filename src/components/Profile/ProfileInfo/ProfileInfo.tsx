import React from "react";
import s from './ProfileInfo.module.css';
import {AxiosResponseTypeProfile} from "../../../redax/Profile-reducer";
import {RenameSpan} from "../../SmallComponents/RenameSpan/RenameSpanFunction";

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
                            <div className={s.status}>                               {/*status*/}
                                <RenameSpan statusTitle={statusTitle}
                                            setTitle={updateStatus}/>
                            </div>
                        </div>
                        <div className={s.social_link}>
                            <div>
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
        </div>
    )
};