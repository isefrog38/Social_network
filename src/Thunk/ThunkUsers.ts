import {Dispatch} from "redux";
import {
    followAC,
    setActivePageUsersAC, setDisabledButtonFollowAC,
    setToggleFetchingAC,
    setTotalCountPagesAC,
    setUsersAC, unfollowAC
} from "../redax/Users-reducer";
import {UsersAPI} from "../Api/Api";

export const getUsersTC = (activePage: number, sizeUsersPage: number) => (dispatch: Dispatch) => {
    dispatch(setToggleFetchingAC(true));
    UsersAPI.getUsers(activePage, sizeUsersPage)
        .then(data => {
            dispatch(setToggleFetchingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalCountPagesAC(data.totalCount));
        });
}

export const changePageTC = (page: number, sizeUsersPage: number) => (dispatch: Dispatch) => {
    dispatch(setActivePageUsersAC(page));
    dispatch(setToggleFetchingAC(true));
    UsersAPI.onPageChanged(page, sizeUsersPage)
        .then(data => {
            dispatch(setToggleFetchingAC(false));
            dispatch(setUsersAC(data.items));
        });
}

export const changeFollowTC = (id: number) => (dispatch: Dispatch) => {
        dispatch(setDisabledButtonFollowAC(true, id));
        UsersAPI.followFunction(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(id));
                }
                dispatch(setDisabledButtonFollowAC(false, id));
            })
}

export const changeUnFollowTC = (id: number) => (dispatch: Dispatch) => {
        dispatch(setDisabledButtonFollowAC(true, id));
        UsersAPI.unfollowFunction(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowAC(id));
                }
                dispatch(setDisabledButtonFollowAC(false, id));
            })
}

