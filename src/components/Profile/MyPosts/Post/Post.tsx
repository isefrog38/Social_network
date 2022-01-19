import React from "react";
import s from './Post.module.css'
import {MyPostsDataType} from "../../../../redax/state";

const Post = (props: MyPostsDataType) => {
    return (
        <div className={s.post}>
            <span className={s.item}>
                <img alt={"logo"}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXSpy0PUas_IlI6LGzLgHFsMj-dzIfBZczg&usqp=CAU'/>
            </span>
            <span className={s.textMessageBlock}>{props.message}</span>
            <div className={s.likesBlock}>
                <span> {props.likesCount} </span> <span className={s.like}>❤ Like</span>
            </div>
        </div>
    );
}

export default Post;