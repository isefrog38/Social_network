import React, {useCallback, useEffect} from 'react';
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {changeProfileForUser, ProfileStateType} from "../../redax/Profile-reducer";
import {useParams} from 'react-router-dom';
import {initialStateAuthorizationType} from "../../redax/Authorization-reducer";
import {getUserProfile} from "../../Api/Api";

export const ProfileContainer = () => {

    let stateProfile = useSelector<AppStateType, ProfileStateType>(state => state.ProfileReducer);
    let { id } = useSelector<AppStateType, initialStateAuthorizationType>(state => state.AuthorizationReducer);
    let dispatch = useDispatch();
    let { userId } = useParams();
    console.log(userId)

    useEffect(() => {
            if (!userId || userId === ":userId") {
                userId = `/${id}`;
            }
            getUserProfile(userId).then(data => {
                dispatch(setUsersProfile(data))
            })
        }, []
    )


    const setUsersProfile = useCallback((profile) => dispatch(changeProfileForUser(profile)), [dispatch]);
    return (
            <Profile profile={stateProfile.profileUser} />
    )
}