type UserActionType = setPageUsersType | setTotalCountType | setToggleFetchingType | setDisabledButtonFollow;
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
export type InitialMovieStateType = {
    totalUsersCountPage: number
    sizeUsersPage: number
    activePage: number
    isFetching: boolean
    isDisabled: Array<number>
};

const SET_PAGE_USERS = "SET_PAGE_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const DISABLED_FOLLOW_BUTTON = "DISABLED_FOLLOW_BUTTON";

let initialState: InitialMovieStateType = {
    totalUsersCountPage: 0,
    sizeUsersPage: 10,
    activePage: 1,
    isFetching: false,
    isDisabled: [],
};

export const MovieReducer = (state = initialState, action: UserActionType): InitialMovieStateType => {
    switch (action.type) {
        case SET_PAGE_USERS : {
            return {
                ...state, activePage: action.page
            }
        }
        case SET_TOTAL_COUNT : {
            return {
                ...state, totalUsersCountPage: action.totalCount > 75 ? 75 : action.totalCount
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

export const setActivePageMovieAC = (page: number): setPageUsersType => ({type: SET_PAGE_USERS, page} as const);
export const setTotalCountMoviePagesAC = (totalCount: number): setTotalCountType => ({type: SET_TOTAL_COUNT, totalCount} as const);
export const setMovieToggleFetchingAC = (isFetching: boolean): setToggleFetchingType => ({type: TOGGLE_FETCHING, isFetching} as const);
export const setDisabledButtonMovieAC = (isDisabled: boolean, userId: number): setDisabledButtonFollow => ({type: DISABLED_FOLLOW_BUTTON, isDisabled, userId} as const);