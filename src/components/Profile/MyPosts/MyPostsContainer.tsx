import React, {useCallback} from "react";
import {
    addPostActionCreator, deleteLikePostAC,
    ProfileStateType,
    setLikePostAC,
    updateNewPostTextActionCreator
} from "../../../Reducers-Store/Profile-reducer";
import {MyPosts} from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Reducers-Store/store";

export const MyPostsContainer = () => {

    let stateProfile = useSelector<AppStateType, ProfileStateType>(state => state.ProfileReducer);
    let dispatch = useDispatch();

    const updateNewPostText = useCallback((text: string) => dispatch(updateNewPostTextActionCreator(text)), [dispatch]);
    const addPost = useCallback(() => dispatch( addPostActionCreator()), [dispatch]);
    const setLikeCount = useCallback((likeId: number) => dispatch(setLikePostAC(likeId)), [dispatch]);
    const deleteLikeCount = useCallback((likeId: number) => dispatch(deleteLikePostAC(likeId)), [dispatch]);

    return (
        <>
            <MyPosts
                deleteLikeCount={deleteLikeCount}
                setLikeCount={setLikeCount}
                profileState={stateProfile.profileUser}
                updateNewPostText={updateNewPostText}
                addPost={addPost}
                myProfileData={stateProfile.myPostData}
                newPostText={stateProfile.newPostText}
            />
        </>
    )
}