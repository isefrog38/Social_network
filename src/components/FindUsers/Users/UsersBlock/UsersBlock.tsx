import React, {memo} from 'react';
import s from "./UsersBlock.module.css";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../../redax/Users-reducer";

type UsersBlockType = UserType & {
    defaultAvatar: string
    disabled: Array<number>
    setDisabled: (isDisabled: boolean, userId: number) => void
    changeUnFollowThunk: (id: number) => void
    changeFollowThunk: (id: number) => void
}

export const UsersBlock = memo((props: UsersBlockType) => {

    const onClickHandlerFollow = () => {
        props.changeFollowThunk(props.id);
    };
    const onClickHandlerUnfollow = () => {
        props.changeUnFollowThunk(props.id);
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
