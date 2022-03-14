import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AxiosResponseTypeProfile} from "../../redax/Profile-reducer";
import {Preloader} from "../Preloader/Preloader";

type ProfileType = {
    profile: null | AxiosResponseTypeProfile
}

const Profile = (props: ProfileType) => {

    if(!props.profile) return <Preloader />                // Preloader
    else return (
        <div>
            <ProfileInfo profileState={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;