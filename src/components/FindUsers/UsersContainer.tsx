import React, {useCallback, useEffect} from 'react';
import s from './UsersContainer.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redax/store";
import {InitialUsersStateType, setDisabledButtonFollowAC} from "../../redax/Users-reducer";
import {Users} from "./Users/Users";
import {Preloader} from "../SmallComponents/Preloader/Preloader";
import {changeFollowTC, changePageTC, changeUnFollowTC, getUsersTC} from "../../Thunk/ThunkUsers";
import {AuthRedirect} from "../../HOC/AuthRedirect";

export const UsersContainer = () => {

    const dispatch = useDispatch();
    const stateUsers = useSelector<AppStateType, InitialUsersStateType>(state => state.UsersReducer)

    const disabledAxiosFunc = useCallback((isDisabled: boolean, userId: number) => dispatch(setDisabledButtonFollowAC(isDisabled, userId)), [dispatch]);

    const getUsersThunk = useCallback((activePage: number, sizePage: number) => dispatch(getUsersTC(activePage, sizePage)),[dispatch]);
    const changePageThunk = useCallback((page: number, sizePage: number) => dispatch(changePageTC(page, sizePage)),[dispatch]);
    const changeFollowThunk = useCallback((id: number) => dispatch(changeFollowTC(id)),[dispatch]);
    const changeUnFollowThunk = useCallback((id: number) => dispatch(changeUnFollowTC(id)),[dispatch]);

    const defaultAvatar = "https://as2.ftcdn.net/v2/jpg/03/08/68/53/1000_F_308685322_QENNJlJFHONQ8FVP2xVsiez6x1almqo2.jpg";

    let calculationPage = Math.ceil(stateUsers.totalUsersCountPage / stateUsers.sizeUsersPage);
    let pages = [];
    for (let i = 1; i <= calculationPage; i++) {
        pages.push(i)
    }

    useEffect(() => {
        getUsersThunk(stateUsers.activePage, stateUsers.sizeUsersPage);
    },[])

    const onClickHandler = (page: number) => {
        changePageThunk(page, stateUsers.sizeUsersPage)
    }

    return (
        <div className={s.main_users}>
            {stateUsers.isFetching
                ? <Preloader/>
                : <div className={s.main_users_block}>
                    <Users
                        changeFollowThunk={changeFollowThunk}
                        changeUnFollowThunk={changeUnFollowThunk}
                        onClickHandler={onClickHandler}
                        pages={pages}
                        users={stateUsers.users}
                        activePage={stateUsers.activePage}
                        defaultAvatar={defaultAvatar}
                        disabled={stateUsers.isDisabled}
                        setDisabled={disabledAxiosFunc}
                    />
                </div>
            }
        </div>
    )
};

export default AuthRedirect(UsersContainer);