import React, {memo} from 'react';
import s from "./UsersBlock.module.css";
import {NavLink} from "react-router-dom";
import {followFunction, unfollowFunction} from "../../../../Api/Api";

type UsersBlockType = {
    name: string,
    id: number,
    uniqueUrlName: any,
    photos: {
        small: string | null,
        large: string | null,
    },
    status: string| null,
    followed: boolean
    unfollow: (id: number) => void
    follow: (id: number) => void
    defaultAvatar: string
    disabled: Array<number>
    setDisabled: (isDisabled: boolean, userId: number) => void
}

export const UsersBlock = memo((props: UsersBlockType) => {

    const onClickHandlerFollow = () => {
        props.setDisabled(true, props.id)
        followFunction(props.id)
            .then(data => {
            if (data.resultCode === 0) {
                props.follow(props.id)
            }
            props.setDisabled(false, props.id)
        })
    };
    const onClickHandlerUnfollow = () => {
        props.setDisabled(true, props.id)
        unfollowFunction(props.id)
            .then(data => {
            if (data.resultCode === 0) {
                props.unfollow(props.id)
            }
            props.setDisabled(false, props.id)
        })
    };
    const disabled = props.disabled.some(id => id === props.id);

    return (
        <div key={props.id} className={s.mainDiv}>
            <span>
                <NavLink to={`/profile/${props.id}`}>
                    <img className={s.image}
                         src={props.photos.small !== null ? props.photos.small : props.defaultAvatar}
                         alt={"ImgPerson"}/>
                </NavLink>
                <div>
                    {!props.followed
                        ? <button className={s.button} disabled={disabled}
                                  onClick={ onClickHandlerFollow }>Follow</button>
                        : <button className={s.button} disabled={disabled}
                                  onClick={ onClickHandlerUnfollow }>UnFollow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <h3>{props.name}</h3>
                    <div>{props.status}</div>
                </span>
            </span>
        </div>
    );
});
