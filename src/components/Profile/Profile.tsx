import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AxiosResponseTypeProfile} from "../../redax/Profile-reducer";
import {Preloader} from "../Preloader/Preloader";

type ProfileType = {
    profileState: null | AxiosResponseTypeProfile
}

const Profile = (props: ProfileType) => {

    if(!props.profileState) return <Preloader />                // Preloader
    else return (
        <div className={s.main}>
            <ProfileInfo profileState={props.profileState}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;