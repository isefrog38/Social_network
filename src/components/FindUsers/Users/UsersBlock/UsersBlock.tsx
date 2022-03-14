import React from 'react';
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
}

export const UsersBlock = (props: UsersBlockType) => {

    const onClickHandlerFollow = () => {
        followFunction(props.id).then(data => {
            if (data.resultCode === 0) {
                props.follow(props.id)
            }
        })
    };
    const onClickHandlerUnfollow = () => {
        unfollowFunction(props.id).then(data => {
            if (data.resultCode === 0) {
                props.follow(props.id)
            }
        })
    };

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
                        ? <button className={s.button}
                                  onClick={ onClickHandlerFollow }>Follow</button>
                        : <button className={s.button}
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
};
