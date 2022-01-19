import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostsDataType} from "../../../redax/state";

type MyPostsPropsType = {
    myPostData: Array<MyPostsDataType>
}


export const MyPosts = (props: MyPostsPropsType) => {
    let myPostElements =
        props.myPostData.map(p =>
            <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
    console.log(myPostElements)

    return (
        <div className={s.postsBlock}>
            <h2>My Posts</h2>
            <div>
                <input/>
                <button> Add Post </button>
            </div>
            <div  className={s.posts}>
                {myPostElements}
            </div>
        </div>
    )
}

export default MyPosts;