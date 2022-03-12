import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../../redax/Users-reducer";
import {NavLink} from "react-router-dom";

type UsersType = {
    unfollow: (id: number) => void
    follow: (id: number) => void
    users: UserType[]
    setActivePage: (page: number) => void
    activePage: number
    onClickHandler: (page: number) => void
    pages: number[]
    defaultAvatar: string
}

export const Users = (props: UsersType) => {

    let PagesBlock = props.pages.map(page => {
        return (
            <div key={page}
                 onClick={() => {
                     props.onClickHandler(page)
                 }}
                 className={props.activePage === page ? `${s.oneButtonPage} + ${s.active} ` : s.oneButtonPage}>
                <span className={props.activePage === page ? s.activeButtonPage : ""}>{page}</span>
            </div>
        )
    });
    let UsersBlock = props.users.map(u => {
        return (
            <div key={u.id} className={s.mainDiv}>
                    <span>
                        <NavLink to={`/profile/${u.id}`}>
                            <img className={s.image}
                                 src={u.photos.small !== null ? u.photos.small : props.defaultAvatar}
                                 alt={"ImgPerson"}/>
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button className={s.button}
                                          onClick={() => {
                                              props.unfollow(u.id)
                                          }}>UnFollow</button>
                                : <button className={s.button}
                                          onClick={() => {
                                              props.follow(u.id)
                                          }}>Follow</button>
                            }
                        </div>
                    </span>
                <span>
                        <span>
                            <h3>{u.name}</h3>
                            <div>{u.status}</div>
                        </span>

                    </span>
            </div>
        )
    });

    return (
        <div>
            <div className={s.blockButtonsPage}>
                {PagesBlock} {/*блок с страницами*/}
            </div>
            {UsersBlock} {/*блок с пользователями*/}
            <div className={s.blockButtonsPage}>
                {PagesBlock} {/*блок с страницами*/}
            </div>
        </div>
    )
        ;
};