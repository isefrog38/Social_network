import React, {memo} from 'react';
import s from "./Users.module.css";
import {UserType} from "../../../redax/Users-reducer";
import {UsersBlock} from "./UsersBlock/UsersBlock";
import {Pages} from "../../Pagination/Pages";

type UsersType = {
    users: UserType[]
    activePage: number
    onClickHandler: (page: number) => void
    pages: number[]
    defaultAvatar: string
    disabled: Array<number>
    setDisabled: (isDisabled: boolean, userId: number) => void
    changeUnFollowThunk: (id: number) => void
    changeFollowThunk: (id: number) => void
}

export const Users = memo((props: UsersType) => {

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
                                                defaultAvatar={props.defaultAvatar}
                                                setDisabled={props.setDisabled}
                                                changeFollowThunk={props.changeFollowThunk}
                                                changeUnFollowThunk={props.changeUnFollowThunk}
                                               />
    );

    return (
        <div className={s.main_users_block}>
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
});