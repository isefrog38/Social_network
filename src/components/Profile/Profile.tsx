import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AxiosResponseTypeProfile} from "../../redax/Profile-reducer";

type ProfileType = {
    profileState: null | AxiosResponseTypeProfile
}

const Profile = (props: ProfileType) => {
    return (
        <div className={s.main}>
            <ProfileInfo profileState={props.profileState}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;