import {Dispatch} from "redux";
import {
    followAC,
    setActivePageUsersAC, setDisabledButtonFollowAC,
    setToggleFetchingAC,
    setTotalCountPagesAC,
    setUsersAC, unfollowAC
} from "../Reducers-Store/Users-reducer";
import {UsersAPI} from "../Api/Api";
import {changeProfileForUser, getStatusAC, setPhotoProfileAC, updateStatusAC} from "../Reducers-Store/Profile-reducer";

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

export const getUsersProfileTC = (userId: string) => (dispatch: Dispatch) => {
    UsersAPI.getUserProfile(userId)
        .then(data => dispatch(changeProfileForUser(data)))
}

export const getStatusTC = (userId: string) => (dispatch: Dispatch) => {
    UsersAPI.getStatus(userId)
        .then(data => {
            dispatch(getStatusAC(data));
        })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    UsersAPI.updateStatus(status)
        .then(data => {
                if (data.resultCode === 0) {
                    dispatch(updateStatusAC(status));
                }
        })
}

export const setPhotoProfileTC = (image: File) => (dispatch: Dispatch) => {
    UsersAPI.setProfilePhoto(image)
        .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setPhotoProfileAC(data.data));
                }
        })
}



