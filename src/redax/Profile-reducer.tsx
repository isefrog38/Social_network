import {ActionsType, AddPostActionType, MyPostPageType, UpdateNewPostTextActionType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const ProfileReducer = (state: MyPostPageType, action: ActionsType): MyPostPageType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText ? state.newPostText : '',
                likesCount: 0
            }
            state.myPostData.unshift(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
    /*if (action.type === ADD_POST) {
        let newPost = {
            id: 6,
            message: state.newPostText ? state.newPostText : '',
            likesCount: 0
        }
        state.myPostData.unshift(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newPostText;
    }*/
};

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => {
    return {type: UPDATE_NEW_POST_TEXT, newPostText: text};
}
