import React, {useCallback, useEffect} from 'react';
import s from './ProfileContainer.module.css';
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {
    AxiosResponseTypeProfile,
    changeProfileForUser,
    ProfileStateType,
    updateStatusAC
} from "../../redax/Profile-reducer";
import {useParams} from 'react-router-dom';
import {initialStateAuthorizationType} from "../../redax/Authorization-reducer";
import {UsersAPI} from "../../Api/Api";
import {ToolBar} from "./ToolBar/ToolBar";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";

export const ProfileContainer = () => {

    let stateProfile = useSelector<AppStateType, ProfileStateType>(state => state.ProfileReducer);
    let { id } = useSelector<AppStateType, initialStateAuthorizationType>(state => state.AuthorizationReducer);
    let dispatch = useDispatch();
    let { userId } = useParams();

    useEffect(() => {
            if (!userId || userId === ":userId") {
                userId = `/${id}`;
            }
        UsersAPI.getUserProfile(userId)
            .then(data => dispatch(setUsersProfile(data)))
        }, []
    )

    const setUsersProfile = useCallback((profile: AxiosResponseTypeProfile) => dispatch(changeProfileForUser(profile)), [dispatch]);
    const UpdateStatus = useCallback((status: string) => dispatch(updateStatusAC(status)), [dispatch]);

    return (
        <div className={s.main_profile}>
            <ToolBar />
            <Profile
                profile={stateProfile.profileUser}
                updateStatus={UpdateStatus}
                statusTitle={stateProfile.status}
            />
        </div>
    )
};

export default WithAuthRedirect(ProfileContainer);