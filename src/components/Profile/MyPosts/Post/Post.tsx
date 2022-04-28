import React from "react";
import s from './Post.module.css';
import {AxiosResponseTypeProfile} from "../../../../Reducers-Store/Profile-reducer";

type PostType = {
    likesState: boolean
    id: number
    message: string
    likesCount: number
    profileState: null | AxiosResponseTypeProfile
    deleteLikeCount: (likeId: number) => void
    setLikeCount: (likeId: number) => void
};

export const Post = ({id, profileState, message, likesCount, likesState, setLikeCount, deleteLikeCount}: PostType) => {

    const onClickHandler = (id: number) => {
        if (!likesState) return setLikeCount(id);
        else return deleteLikeCount(id);
    }

    let state = profileState;
    let defaultAvaMini = 'https://deti.digital/wp-content/plugins/buddyboss-platform/bp-core/images/profile-avatar-buddyboss.png';

    if (!state) return <div>Error...</div>

    return (
        <div className={s.post}>
            <span className={s.item}>
                <img alt={"logo" + state.userId}
                     src={state.photos.small === null ? defaultAvaMini : `${state.photos.small}`}/>
            </span>
            <span className={s.textMessageBlock} key={id}>{message}</span>

            <div className={s.likesBlock}>
                <div className={likesState ? s.active_like : s.like} onClick={() => onClickHandler(id)}/>
                <span className={s.like_number}>{likesCount}</span>
            </div>
        </div>
    );
}