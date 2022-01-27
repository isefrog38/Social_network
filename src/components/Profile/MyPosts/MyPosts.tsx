import React, {RefObject, useState} from "react";
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
    let newPostElement: RefObject<HTMLInputElement> = React.createRef();

    let addPost = () => {
            let text = newPostElement?.current?.value;
            if (text) {
                props.addPost(text);
            }
    }

    let onChangePost = () => {
        let text = newPostElement?.current?.value
        if (text) {
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h2>My Posts</h2>
            <div>
                <input
                    ref={newPostElement}
                    onChange={onChangePost}
                    value={props.newPostText}
                />
                <button
                    onClick={addPost}>
                    Add Post
                </button>
            </div>
            <div className={s.posts}>
                {myPostElements}
            </div>
        </div>
    )
}

export default MyPosts;