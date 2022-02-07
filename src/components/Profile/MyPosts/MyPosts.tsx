import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionsType, MyPostPageType} from "../../../redax/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/Profile-reducer";

type MyPostsPropsType = {
    myProfileData: MyPostPageType
    dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let myPostElements = props.myProfileData.myPostData.map(p =>
        <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    let addPost = () => {
        props.dispatch( addPostActionCreator() )
    }

    let onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h2>My Posts</h2>
            <div className={s.addPostBlock}>
                <input
                    className={s.inputAddPost}
                    onChange={onPostChange}
                    value={props.myProfileData.newPostText}
                />
                <div className={s.buttonAddPost}>
                    <button className={s.buttonAddPosts}
                            disabled={!props.myProfileData.newPostText}
                            onClick={addPost}>
                        Add Post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {myPostElements}
            </div>
        </div>
    )
}

export default MyPosts;