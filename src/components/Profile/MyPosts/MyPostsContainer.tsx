import React from "react";
import {addPostActionCreator, MyPostsUserType, updateNewPostTextActionCreator} from "../../../redax/Profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redax/redux-store";
import { Dispatch } from "redux";

type MapStatePropsType = {
    myProfileData:  Array<MyPostsUserType>
    newPostText: string
};
type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
};
export type PostPropsType = MapDispatchPropsType & MapStatePropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        myProfileData: state.ProfileReducer.myPostData,
        newPostText: state.ProfileReducer.newPostText
    }
}

const mapDispathToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        } ,
        addPost: () => {
            dispatch( addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect( mapStateToProps, mapDispathToProps)(MyPosts);
