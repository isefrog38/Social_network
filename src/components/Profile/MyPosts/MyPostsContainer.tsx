import React, {useCallback} from "react";
import {addPostActionCreator, ProfileStateType, updateNewPostTextActionCreator} from "../../../redax/Profile-reducer";
import {MyPosts} from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redax/store";

export const MyPostsContainer = () => {

    let stateProfile = useSelector<AppStateType, ProfileStateType>(state => state.ProfileReducer);
    let dispatch = useDispatch();

    const updateNewPostText = useCallback((text: string) => dispatch(updateNewPostTextActionCreator(text)), [dispatch]);
    const addPost = useCallback(() => dispatch( addPostActionCreator()), [dispatch]);

    return (
        <>
            <MyPosts
                profileState={stateProfile.profileUser}
                updateNewPostText={updateNewPostText}
                addPost={addPost}
                myProfileData={stateProfile.myPostData}
                newPostText={stateProfile.newPostText}
            />
        </>
    )
}