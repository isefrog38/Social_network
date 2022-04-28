import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AxiosResponseTypeProfile} from "../../Reducers-Store/Profile-reducer";
import {Preloader} from "../SmallComponents/Preloader/Preloader";

type ProfileType = {
    profile: null | AxiosResponseTypeProfile
    statusTitle: string
    updateStatus: (status: string) => void
}

const Profile = ({profile, updateStatus, statusTitle}: ProfileType) => {

    if(!profile) return <Preloader />                // Preloader
    else return (
        <div className={s.main_profile_block}>
            <ProfileInfo
                profileState={profile}
                statusTitle={statusTitle}
                updateStatus={updateStatus}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;