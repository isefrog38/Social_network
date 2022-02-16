export type MyPostPageType = {
    myPostData: Array<MyPostsUserType>
    newPostText?: string
};
export type MyPostsUserType = {
    id: number
    message: string
    likesCount: number
};
export type AddPostActionType = {
    type: "ADD-POST"
};
export type AddMessageActionType = {
    type: "ADD-MESSAGE"
};
export type UpdateNewPostTextActionType = {
    type : "UPDATE-NEW-POST-TEXT"
    newPostText: string
};
export type TextMessageFromPostActionType = {
    type: "TEXT-MESSAGE-FROM-POST"
    newTextMessage: string
};
export type ActionsType = AddPostActionType | AddMessageActionType | UpdateNewPostTextActionType | TextMessageFromPostActionType

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type InitialProfileStateType = {
    myPostData: Array<MyPostsUserType>
    newPostText: string
}

let initialState: InitialProfileStateType = {
    myPostData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 90},
        {id: 3, message: 'Yea ) ', likesCount: 24},
        {id: 4, message: 'Second post', likesCount: 116},
    ],
    newPostText: ''
}

export const ProfileReducer = (state: InitialProfileStateType = initialState, action: ActionsType): InitialProfileStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText ? state.newPostText : '',
                likesCount: 0
            }
            return {...state, myPostData: [newPost, ...state.myPostData], newPostText: ""};
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newPostText};
        default:
            return state;
    }
};

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => {
    return {type: UPDATE_NEW_POST_TEXT, newPostText: text};
}
