type UserActionType = FollowACType | UnFollowACType | setUsersType;
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
export type UserType = {
    id: number
    avatar: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
};
export type InitialUsersStateType = {
    users: Array<UserType>
};

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

let initialState: InitialUsersStateType = {
    users: []
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
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}


export const followAC = (userId: number): FollowACType => ({type: FOLLOW, userId});
export const unfollowAC = (userId: number): UnFollowACType => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: Array<UserType>): setUsersType => ({type: SET_USERS, users});