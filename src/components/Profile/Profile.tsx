import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, MyPostPageType} from "../../redax/state";


type ProfilePropType = {
    myProfileData: MyPostPageType
    dispatch: (action: ActionsType) => void
}

const Profile = (props: ProfilePropType) => {
    return <div className={s.main}>
        <ProfileInfo/>
        <MyPosts
            myProfileData={props.myProfileData}
            dispatch={props.dispatch}
        />
    </div>
}

export default Profile;