import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AxiosResponseTypeProfile} from "../../Reducers-Store/Profile-reducer";
import {Preloader} from "../SmallComponents/Preloader/Preloader";

type ProfileType = {
    myId: number | null
    profile: null | AxiosResponseTypeProfile
    statusTitle: string
    updateStatus: (status: string) => void
    setPhotoProfile: (el: File) => void
}

const Profile = ({profile, updateStatus, statusTitle, setPhotoProfile, myId}: ProfileType) => {

    if(!profile) return <Preloader />                // Preloader
    else return (
        <div className={s.main_profile_block}>
            <ProfileInfo
                myId={myId}
                setPhotoProfile={setPhotoProfile}
                profileState={profile}
                statusTitle={statusTitle}
                updateStatus={updateStatus}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;