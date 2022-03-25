type UserActionType = setPageUsersType | setTotalCountType | setToggleFetchingType;
type setPageUsersType = {
    type: "SET_PAGE_MOVIES"
    page: number
};
type setTotalCountType = {
    type: "SET_TOTAL_COUNT"
    totalCount: number
};
type setToggleFetchingType = {
    type: "TOGGLE_FETCHING"
    preloader: boolean
};
export type InitialMovieStateType = {
    totalUsersCountPage: number
    sizeUsersPage: number
    activePage: number
    preloader: boolean
};

const SET_PAGE_MOVIES = "SET_PAGE_MOVIES";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";

let initialState: InitialMovieStateType = {
    totalUsersCountPage: 0,
    sizeUsersPage: 10,
    activePage: 1,
    preloader: false,
};

export const MovieReducer = (state = initialState, action: UserActionType): InitialMovieStateType => {
    switch (action.type) {
        case SET_PAGE_MOVIES : {
            return {
                ...state, activePage: action.page
            }
        }
        case SET_TOTAL_COUNT : {
            return {
                ...state, totalUsersCountPage: Number(action.totalCount) > 75 ? 75 : Number(action.totalCount)
            }
        }
        case TOGGLE_FETCHING : {
            return {
                ...state, preloader: action.preloader
            }
        }
        default:
            return state
    }
}

export const setActivePageMovieAC = (page: number): setPageUsersType => ({type: SET_PAGE_MOVIES, page} as const);
export const setTotalCountMoviePagesAC = (totalCount: number): setTotalCountType => ({type: SET_TOTAL_COUNT, totalCount} as const);
export const setMovieToggleFetchingAC = (preloader: boolean): setToggleFetchingType => ({type: TOGGLE_FETCHING, preloader} as const);