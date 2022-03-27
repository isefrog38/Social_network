import React from "react";
import s from './Post.module.css';
import {AxiosResponseTypeProfile} from "../../../../redax/Profile-reducer";

type PostType = {
    id: number
    message: string
    likesCount: number
    profileState: null | AxiosResponseTypeProfile
};

export const Post = (props: PostType) => {
    let state = props.profileState;
    let defaultPhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXSpy0PUas_IlI6LGzLgHFsMj-dzIfBZczg&usqp=CAU';

    if (!state) return <div>Error...</div>

    return (
        <div className={s.post}>
            <span className={s.item}>
                <img alt={"logo" + state.userId}
                    src={ state ? `${state.photos.small}` : defaultPhoto} />
            </span>
            <span className={s.textMessageBlock} key={props.id}>{props.message}</span>
            <div className={s.likesBlock}>
                <span className={s.like}>❤</span><span> {props.likesCount} </span>
            </div>
        </div>
    );
}