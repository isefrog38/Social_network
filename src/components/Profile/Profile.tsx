import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsDataType} from "../../redax/state";


type ProfilePropType = {
    myPostData: Array<MyPostsDataType>
}

const Profile = (props: ProfilePropType) => {
    return <div className={s.main}>
        <ProfileInfo/>
        <MyPosts myPostData={props.myPostData}/>
    </div>
}

export default Profile;