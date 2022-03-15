import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../../redax/Users-reducer";
import {UsersBlock} from "./UsersBlock/UsersBlock";
import {Pages} from "./Pages/Pages";

type UsersType = {
    unfollow: (id: number) => void
    follow: (id: number) => void
    users: UserType[]
    setActivePage: (page: number) => void
    activePage: number
    onClickHandler: (page: number) => void
    pages: number[]
    defaultAvatar: string
    disabled: Array<number>
    setDisabled: (isDisabled: boolean, userId: number) => void
}

export const Users = (props: UsersType) => {

    let PagesBlock = props.pages.map(page => <Pages
                                                key={page}
                                                onClickHandler={props.onClickHandler}
                                                activePage={props.activePage}
                                                page={page}
                                            />
    );
    let Users = props.users.map(user => <UsersBlock
                                                key={user.id}
                                                {...user}
                                                disabled={props.disabled}
                                                unfollow={props.unfollow}
                                                follow={props.follow}
                                                defaultAvatar={props.defaultAvatar}
                                                setDisabled={props.setDisabled}
                                               />
    );

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className={s.blockButtonsPage}>
                {PagesBlock}                             {/*блок с страницами*/}
            </div>
            {Users}                                   {/*блок с пользователями*/}
            <div className={s.blockButtonsPage}>
                {PagesBlock}                                {/*блок с страницами*/}
            </div>
        </div>
    )
        ;
};