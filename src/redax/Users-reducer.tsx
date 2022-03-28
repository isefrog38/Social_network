type UserActionType = FollowACType | UnFollowACType | setUsersType | setPageUsersType | setTotalCountType | setToggleFetchingType | setDisabledButtonFollow;
type FollowACType = {
    type: "FOLLOW",
    userId: number
};
type UnFollowACType = {
    type: "UNFOLLOW",
    userId: number
};
type setUsersType = {
    type: "SET_USERS"
    users: Array<UserType>
};
type setPageUsersType = {
    type: "SET_PAGE_USERS"
    page: number
};
type setTotalCountType = {
    type: "SET_TOTAL_COUNT"
    totalCount: number
};
type setToggleFetchingType = {
    type: "TOGGLE_FETCHING"
    isFetching: boolean
};
type setDisabledButtonFollow = {
    type: "DISABLED_FOLLOW_BUTTON"
    isDisabled: boolean
    userId: number
};
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

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE_USERS = "SET_PAGE_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const DISABLED_FOLLOW_BUTTON = "DISABLED_FOLLOW_BUTTON";
const maxValue = 75;

let initialState: InitialUsersStateType = {
    users: [],
    totalUsersCountPage: 0,
    sizeUsersPage: 5,
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
                ...state, totalUsersCountPage: action.totalCount > maxValue ? maxValue : action.totalCount
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


export const followAC = (userId: number): FollowACType => ({type: FOLLOW, userId} as const);
export const unfollowAC = (userId: number): UnFollowACType => ({type: UNFOLLOW, userId} as const);
export const setUsersAC = (users: Array<UserType>): setUsersType => ({type: SET_USERS, users} as const);
export const setActivePageUsersAC = (page: number): setPageUsersType => ({type: SET_PAGE_USERS, page} as const);
export const setTotalCountPagesAC = (totalCount: number): setTotalCountType => ({type: SET_TOTAL_COUNT, totalCount} as const);
export const setToggleFetchingAC = (isFetching: boolean): setToggleFetchingType => ({type: TOGGLE_FETCHING, isFetching} as const);
export const setDisabledButtonFollowAC = (isDisabled: boolean, userId: number): setDisabledButtonFollow => ({type: DISABLED_FOLLOW_BUTTON, isDisabled, userId} as const);