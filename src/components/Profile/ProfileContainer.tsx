import React, {useCallback, useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {changeProfileForUser, ProfileStateType} from "../../redax/Profile-reducer";
import {useParams} from 'react-router-dom';
import {initialStateAuthorizationType} from "../../redax/Authorization-reducer";

export const ProfileContainer = () => {

    let stateProfile = useSelector<AppStateType, ProfileStateType>(state => state.ProfileReducer);
    let { id } = useSelector<AppStateType, initialStateAuthorizationType>(state => state.AuthorizationReducer)
    let dispatch = useDispatch();

    let { userId } = useParams();

    useEffect(() => {
            if (!userId) {
                userId = `/${id}`;
            }
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
                dispatch(setUsersProfile(response.data))
            })
        }, []
    )


    const setUsersProfile = useCallback((profile) => dispatch(changeProfileForUser(profile)), [dispatch]);
    return (
            <Profile profile={stateProfile.profileUser} />
    )
}