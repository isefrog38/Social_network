export type UserActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setActivePageUsersAC>
    | ReturnType<typeof setTotalCountPagesAC>
    | ReturnType<typeof setToggleFetchingAC>
    | ReturnType<typeof setDisabledButtonFollowAC>;

export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: any,
    photos: {
        small: string | null,
        large: string | null,
    },
    status: string| null,
    followed: boolean
};
export type InitialUsersStateType = {
    users: Array<UserType>
    totalUsersCountPage: number
    sizeUsersPage: number
    activePage: number
    isFetching: boolean
    isDisabled: Array<number>
};

const FOLLOW = "samurai_network/followUser/FOLLOW";
const UNFOLLOW = "samurai_network/unFollowUser/UNFOLLOW";
const SET_USERS = "samurai_network/setUser/SET_USERS";
const SET_PAGE_USERS = "samurai_network/setUserInProfile/SET_PAGE_USERS";
const SET_TOTAL_COUNT = "samurai_network/setTotalCuntInUsersPage/SET_TOTAL_COUNT";
const TOGGLE_FETCHING = "samurai_network/toggleFetching/TOGGLE_FETCHING";
const DISABLED_FOLLOW_BUTTON = "samurai_network/disabledFollowButton/DISABLED_FOLLOW_BUTTON";

let initialState: InitialUsersStateType = {
    users: [],
    totalUsersCountPage: 0,
    sizeUsersPage: 10,
    activePage: 1,
    isFetching: false,
    isDisabled: [],
};

export const UsersReducer = (state = initialState, action: UserActionType): InitialUsersStateType => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: [
                    ...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]
            }
        case UNFOLLOW :
            return {
                ...state,
                users: [
                    ...state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)]
            }
        case SET_USERS : {
            return {
                ...state, users: [...action.users]
            }
        }
        case SET_PAGE_USERS : {
            return {
                ...state, activePage: action.page
            }
        }
        case SET_TOTAL_COUNT : {
            return {
                ...state, totalUsersCountPage: action.totalCount
            }
        }
        case TOGGLE_FETCHING : {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case DISABLED_FOLLOW_BUTTON : {
            return {
                ...state,
                isDisabled: action.isDisabled
                    ? [...state.isDisabled, action.userId]
                    : state.isDisabled.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}


export const followAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const);
export const setActivePageUsersAC = (page: number) => ({type: SET_PAGE_USERS, page} as const);
export const setTotalCountPagesAC = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount} as const);
export const setToggleFetchingAC = (isFetching: boolean) => ({type: TOGGLE_FETCHING, isFetching} as const);
export const setDisabledButtonFollowAC = (isDisabled: boolean, userId: number) => ({type: DISABLED_FOLLOW_BUTTON, isDisabled, userId} as const);












