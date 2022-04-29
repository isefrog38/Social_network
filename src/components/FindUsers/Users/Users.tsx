import React, {memo} from 'react';
import s from "./Users.module.css";
import {UserType} from "../../../Reducers-Store/Users-reducer";
import {UsersBlock} from "./UsersBlock/UsersBlock";
import {ArrowScroll} from "../../SmallComponents/ArrowScroll/ArrowScroll";
import {Pagination} from "../../SmallComponents/Pagination/Pagination";

type UsersType = {
    sizeUsersPage: number
    totalUsersCountPage: number
    users: UserType[]
    activePage: number
    onClickHandler: (page: number) => void
    defaultAvatar: string
    disabled: Array<number>
    setDisabled: (isDisabled: boolean, userId: number) => void
    changeUnFollowThunk: (id: number) => void
    changeFollowThunk: (id: number) => void
}

export const Users = memo((props: UsersType) => {

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
                <Pagination activePage={props.activePage}
                            onClickHandler={props.onClickHandler}
                            pageSize={props.sizeUsersPage}
                            totalItemsCountPage={props.totalUsersCountPage}
                />
            </div>
            {Users}                                   {/*блок с пользователями*/}
            <div className={s.blockButtonsPage}>
                <Pagination activePage={props.activePage}
                            onClickHandler={props.onClickHandler}
                            pageSize={props.sizeUsersPage}
                            totalItemsCountPage={props.totalUsersCountPage}
                />
            </div>
            <ArrowScroll />
        </div>
    )
        ;
});