import React, {useCallback} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {
    AxiosResponseTypeProfile,
    changeProfileForUser,
    ProfileStateType
} from "../../redax/Profile-reducer";

export const ProfileContainer = () => {

    let stateProfile = useSelector<AppStateType, ProfileStateType>(state => state.ProfileReducer);
    let dispatch = useDispatch();

    const setUsersProfile = useCallback((profile) => dispatch(changeProfileForUser(profile)), [dispatch]);

    return (
        <>
            <ProfileClassContainer profile={stateProfile.profileUser} setUsersProfile={setUsersProfile}/>
        </>
    )
}

type ProfileContainerType = {
    setUsersProfile: (profile: any) => void
    profile: null | AxiosResponseTypeProfile
}

class ProfileClassContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => this.props.setUsersProfile(response.data));
    }

    render() {
        return (
            < >
                <Profile profileState={this.props.profile}/>
            </>
        );
    }
}