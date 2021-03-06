import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {AxiosResponseTypeProfile, MyPostsUserType} from "../../../Reducers-Store/Profile-reducer";
import {InputForm} from "../../SmallComponents/InputForm/InputForm";

type MyPostsType = {
    deleteLikeCount: (likeId: number) => void
    setLikeCount: (likeId: number) => void
    profileState: null | AxiosResponseTypeProfile
    myProfileData:  Array<MyPostsUserType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
};

export const MyPosts = (props: MyPostsType) => {

    let myPostElements = props.myProfileData.map(p => <Post key={p.id}
                                                            likesState={p.youLikes}
                                                            deleteLikeCount={props.deleteLikeCount}
                                                            setLikeCount={props.setLikeCount}
                                                            message={p.message}
                                                            likesCount={p.likesCount}
                                                            id={p.id}
                                                            profileState={props.profileState}
    />);

    let addPost = () => props.addPost();
    let onPostChange = (e: ChangeEvent<HTMLInputElement>) => props.updateNewPostText(e.currentTarget.value);

    return (
        <div className={s.postsBlock}>
            <h2>My Posts</h2>
            <InputForm value={props.newPostText} onClickHandler={addPost} onChangeHandler={onPostChange}/>
            <div className={s.posts}>
                {myPostElements}
            </div>
        </div>
    )
}