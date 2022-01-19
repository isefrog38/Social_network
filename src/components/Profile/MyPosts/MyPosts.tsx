import React, {RefObject, useState} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostsDataType} from "../../../redax/state";

type MyPostsPropsType = {
    myPostData: Array<MyPostsDataType>
    addPost: (postMessage: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {

    let myPostElements = props.myPostData.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);
    let newPostElement: RefObject<HTMLInputElement> = React.createRef();

    let onChangePost = () => {
        let text = newPostElement?.current?.value
        if (text) {props.addPost(text)}
        newPostElement.current.value = ""
    }

    return (
        <div className={s.postsBlock}>
            <h2>My Posts</h2>
            <div>
                <input ref={newPostElement} onChange={onChangePost}/>
                <button onClick={props.addPost}> Add Post</button>
            </div>
            <div className={s.posts}>
                {myPostElements}
            </div>
        </div>
    )
}

export default MyPosts;