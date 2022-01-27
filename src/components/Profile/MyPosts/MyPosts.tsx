import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostsDataType} from "../../../redax/state";

type MyPostsPropsType = {
    myPostData: Array<MyPostsDataType>
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {

    let myPostElements = props.myPostData.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);


    let addPost = () => {
            let text = props.newPostText;
            if (text) {
                props.addPost(text);
            }
    }

    let onChangePost = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value;
        if (text) {
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h2>My Posts</h2>
            <div className={s.addPostBlock}>
                <input
                    className={s.inputAddPost}
                    onChange={onChangePost}
                    value={props.newPostText}
                />
                <div className={s.buttonAddPost}>
                <button className={s.buttonAddPosts}
                    disabled={!props.newPostText}
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