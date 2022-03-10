import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {
    followAC,
    InitialUsersStateType,
    setActivePageUsersAC, setTotalCountPagesAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redax/Users-reducer";
import {UsersClass} from "./Users/UsersClass";


export const UsersContainer = React.memo(() => {

    const dispatch = useDispatch();
    const stateUsers = useSelector<AppStateType, InitialUsersStateType>(state => state.UsersReducer)

    const follow = (userId: number) => dispatch(followAC(userId));
    const unfollow = (userId: number) => dispatch(unfollowAC(userId));
    const setUsers = (users: UserType[]) => dispatch(setUsersAC(users));
    const setActivePage = (page: number) => dispatch(setActivePageUsersAC(page));
    const setTotalCountPages = (totalCount: number) => dispatch(setTotalCountPagesAC(totalCount));

    return (
        <div>
            <UsersClass
                unfollow={unfollow}
                follow={follow}
                users={stateUsers.users}
                setUsers={setUsers}
                totalUsersCountPage={stateUsers.totalUsersCountPage}
                sizeUsersPage={stateUsers.sizeUsersPage}
                setActivePage={setActivePage}
                activePage={stateUsers.activePage}
                setTotalCountPages={setTotalCountPages}
            />
        </div>
    )
})