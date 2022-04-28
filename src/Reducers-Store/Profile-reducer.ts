export type MyPostPageType = {
    myPostData: Array<MyPostsUserType>
    newPostText?: string
};
export type MyPostsUserType = {
    id: number
    message: string
    likesCount: number
    youLikes: boolean,
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
};
export type ProfileActionsType =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeProfileForUser>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateStatusAC>
    | ReturnType<typeof setLikePostAC>
    | ReturnType<typeof deleteLikePostAC>
    | ReturnType<typeof getStatusAC>;

export type ProfileStateType = {
    myPostData: Array<MyPostsUserType>
    newPostText: string
    profileUser: null | AxiosResponseTypeProfile
    status: string
};

/*Redux Ducks NAMING*/
const ADD_POST = "samurai_network/addProfilePost/ADD_POST";
const UPDATE_NEW_POST_TEXT = "samurai_network/updateProfilePost/UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "samurai_network/setProfileUsers/SET_USER_PROFILE";
const UPDATE_STATUS = "samurai_network/updateProfileStatus/UPDATE_STATUS";
const GET_STATUS = "samurai_network/getProfileStatus/GET_STATUS";
const SET_LIKE_POST = "samurai_network/setProfileLikesPost/SET_LIKE_POST";
const DELETE_LIKE_POST = "samurai_network/setProfileLikesPost/DELETE_LIKE_POST";

let initialState: ProfileStateType = {
    myPostData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12, youLikes: false,},
        {id: 2, message: "It's my first post", likesCount: 90, youLikes: false,},
        {id: 3, message: 'YEA BOY', likesCount: 24, youLikes: false,},
        {id: 4, message: 'Second post', likesCount: 116, youLikes: false,},
    ],
    newPostText: '',
    profileUser: null,
    status: '',
};

export const ProfileReducer = (state: ProfileStateType = initialState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText ? state.newPostText : '',
                likesCount: 0,
                youLikes: false,
            }
            return {...state, myPostData: [newPost, ...state.myPostData], newPostText: ""};
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newPostText};
        case SET_USER_PROFILE:
            return {...state, profileUser: action.profile}
        case UPDATE_STATUS:
            return {...state, status: action.status === '' ? 'This could be your status' : action.status}
        case GET_STATUS:
            return {...state, status: action.status }
        case SET_LIKE_POST:
            return {
                ...state,
                myPostData: state.myPostData.map(el => el.id === action.likeId
                    ? {...el, likesCount: el.likesCount + 1, youLikes: true}
                    : el),
            }
        case DELETE_LIKE_POST:
            return {
                ...state,
                myPostData: state.myPostData.map(el => el.id === action.likeId
                    ? {...el, likesCount: el.likesCount - 1, youLikes: false}
                    : el),
            }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const changeProfileForUser = (profile: AxiosResponseTypeProfile) => ({type: SET_USER_PROFILE , profile} as const);
export const updateNewPostTextActionCreator = (newPostText: string) => ({type: UPDATE_NEW_POST_TEXT, newPostText} as const );
export const updateStatusAC = (status: string) => ({type: UPDATE_STATUS, status} as const );
export const getStatusAC = (status: string) => ({type: GET_STATUS, status} as const);
export const setLikePostAC = (likeId: number) => ({type: SET_LIKE_POST, likeId} as const);
export const deleteLikePostAC = (likeId: number) => ({type: DELETE_LIKE_POST, likeId} as const);