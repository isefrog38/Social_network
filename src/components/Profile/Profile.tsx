import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsDataType} from "../../redax/state";


type ProfilePropType = {
    myPostData: Array<MyPostsDataType>
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfilePropType) => {
    return <div className={s.main}>
        <ProfileInfo/>
        <MyPosts
            newPostText={props.newPostText}
            myPostData={props.myPostData}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
        />
    </div>
}

export default Profile;