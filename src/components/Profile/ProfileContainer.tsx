import React, {useCallback, useEffect} from 'react';
import s from './ProfileContainer.module.css';
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {ProfileStateType} from "../../redax/Profile-reducer";
import {useParams} from 'react-router-dom';
import {initialStateAuthorizationType} from "../../redax/Authorization-reducer";
import {ToolBar} from "./ToolBar/ToolBar";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {getStatusTC, getUsersProfileTC, updateStatusTC} from "../../Thunk/ThunkUsers";

export const ProfileContainer = () => {

    let stateProfile = useSelector<AppStateType, ProfileStateType>(state => state.ProfileReducer);
    let { id } = useSelector<AppStateType, initialStateAuthorizationType>(state => state.AuthorizationReducer);
    let dispatch = useDispatch();
    let { userId } = useParams();

    const setUsersProfile = useCallback((userId: string) => dispatch(getUsersProfileTC(userId)), [dispatch]);
    const updateStatus = useCallback((status: string) => dispatch(updateStatusTC(status)), [dispatch]);
    const getStatus = useCallback((userId: string) => dispatch(getStatusTC(userId)), [dispatch]);

    useEffect(() => {
        if (!userId || userId === ":userId") {
            userId = `/${id}`;
        }
            setUsersProfile(userId);
            getStatus(userId);
            updateStatus(status);
        /*UsersAPI.getStatus(userId)
            .then(data => {
                console.log(data)
                if (data.resultCode === 0) {
                    dispatch(getStatusAC(data.status));
                }
            })

        UsersAPI.getUserProfile(userId)
            .then(data => dispatch(setUsersProfile(data)))*/
    }, []);

    return (
        <div className={s.main_profile}>
            <ToolBar />
            <Profile
                profile={stateProfile.profileUser}
                updateStatus={updateStatus}
                statusTitle={stateProfile.status}
            />
        </div>
    )
};

export default WithAuthRedirect(ProfileContainer);