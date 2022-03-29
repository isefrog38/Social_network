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
    let defaultAvaMini = 'https://deti.digital/wp-content/plugins/buddyboss-platform/bp-core/images/profile-avatar-buddyboss.png';

    if (!state) return <div>Error...</div>

    return (
        <div className={s.post}>
            <span className={s.item}>
                <img alt={"logo" + state.userId}
                    src={ state.photos.small === null ? defaultAvaMini : `${state.photos.small}`} />
            </span>
            <span className={s.textMessageBlock} key={props.id}>{props.message}</span>
            <div className={s.likesBlock}>
                <span className={s.like}>❤</span><span> {props.likesCount} </span>
            </div>
        </div>
    );
}