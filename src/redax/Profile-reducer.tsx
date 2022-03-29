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
    type: "ADD_POST"
};
export type AddMessageActionType = {
    type: "ADD_MESSAGE"
};
export type UpdateNewPostTextActionType = {
    type : "UPDATE_NEW_POST_TEXT"
    newPostText: string
};
export type UpdateNewStatusType = {
    type : "SET_NEW_STATUS"
    status: string
};
export type TextMessageFromPostActionType = {
    type: "TEXT_MESSAGE_FROM_POST"
    newTextMessage: string
};
export type changeProfileForUserActionType = {
    type: "SET_USER_PROFILE"
    profile: AxiosResponseTypeProfile | null
};
export type AxiosResponseTypeProfile = {
    "aboutMe": string
    "contacts": {
        "facebook": string
        "website": null
        "vk": string
        "twitter": string
        "instagram": string
        "youtube": null
        "github": string
        "mainLink": null
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": {
        "small": string
        "large": string
    }
}
export type ActionsType = AddPostActionType | AddMessageActionType | UpdateNewPostTextActionType | TextMessageFromPostActionType | changeProfileForUserActionType | UpdateNewStatusType;
export type ProfileStateType = {
    myPostData: Array<MyPostsUserType>
    newPostText: string
    profileUser: null | AxiosResponseTypeProfile
    status: string
};

const ADD_POST = "ADD_POST";
const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_NEW_STATUS = "SET_NEW_STATUS";

let initialState: ProfileStateType = {
    myPostData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 90},
        {id: 3, message: 'Yea ) ', likesCount: 24},
        {id: 4, message: 'Second post', likesCount: 116},
    ],
    newPostText: '',
    profileUser: null,
    status: 'This could be your status',
};

export const ProfileReducer = (state: ProfileStateType = initialState, action: ActionsType): ProfileStateType => {
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
        case SET_USER_PROFILE:
            return {...state, profileUser: action.profile}
        case SET_NEW_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
};

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST} as const);
export const changeProfileForUser = (profile: AxiosResponseTypeProfile): changeProfileForUserActionType => ({type: SET_USER_PROFILE , profile} as const);
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => ({type: UPDATE_NEW_POST_TEXT, newPostText: text} as const );
export const updateStatusAC = (status: string): UpdateNewStatusType => ({type: SET_NEW_STATUS, status} as const );
