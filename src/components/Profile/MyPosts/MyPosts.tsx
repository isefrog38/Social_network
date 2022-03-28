import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {AxiosResponseTypeProfile, MyPostsUserType} from "../../../redax/Profile-reducer";
import {ClearButton} from "../../SmallComponents/ClearButton/ClearButton";

type MyPostsType = {
    profileState: null | AxiosResponseTypeProfile
    myProfileData:  Array<MyPostsUserType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
};

export const MyPosts = (props: MyPostsType) => {

    let myPostElements = props.myProfileData.map(p =>
        <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id} profileState={props.profileState}/>);

    let addPost = () => props.addPost();
    let onPostChange = (e: ChangeEvent<HTMLInputElement>) => props.updateNewPostText(e.currentTarget.value);

    return (
        <div className={s.postsBlock}>
            <h2>My Posts</h2>
            <div className={s.addPostBlock}>
                <input
                    placeholder={'Add new post'}
                    className={s.inputAddPost}
                    onChange={onPostChange}
                    value={props.newPostText}
                />
                <div className={s.buttonAddPost}>
                    <ClearButton name={'Add Post'} disabled={!props.newPostText} onClick={addPost} />
                </div>
            </div>
            <div className={s.posts}>
                {myPostElements}
            </div>
        </div>
    )
}