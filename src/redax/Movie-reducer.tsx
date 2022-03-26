export type MovieResponseType = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
};
type UserActionType = TypeSelectType | SearchTitle | setPageUsersType | setTotalCountType | setToggleFetchingType | SearchResultType | SearchErrorType | SearchTypeByType | SearchErrorTypeByType;
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
type SearchResultType = {
    type: "SEARCH_RESULT"
    searchResult: Array<MovieResponseType>
};
type SearchErrorType = {
    type: "SEARCH_ERROR"
    error: string
};
type SearchTypeByType = {
    type: "SEARCH_RESULT_BY_TYPE"
    searchResultByType: Array<MovieResponseType>
};
type SearchTitle = {
    type: "SEARCH_TITLE"
    title: string
};
type SearchErrorTypeByType = {
    type: "SEARCH_ERROR_BY_TYPE"
    errorByType: string
};
type TypeSelectType = {
    type: "TYPE"
    selectType: 'series' | 'movie'
};
export type SelectTypeMovieType = 'series' | 'movie'
export type InitialMovieStateType = {
    type: SelectTypeMovieType
    searchTitle: string
    searchResult: Array<MovieResponseType>
    searchResultByType: Array<MovieResponseType>
    searchError: string
    searchErrorByType: string
    totalUsersCountPage: number
    sizeUsersPage: number
    activePage: number
    preloader: boolean
};

const TYPE = "TYPE";
const SET_PAGE_MOVIES = "SET_PAGE_MOVIES";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const SEARCH_ERROR = "SEARCH_ERROR";
const SEARCH_RESULT = "SEARCH_RESULT";
const SEARCH_RESULT_BY_TYPE = "SEARCH_RESULT_BY_TYPE";
const SEARCH_TITLE = "SEARCH_TITLE";
const SEARCH_ERROR_BY_TYPE = "SEARCH_ERROR_BY_TYPE";

let initialState: InitialMovieStateType = {
    type: 'movie',
    searchTitle: '',
    searchResult: [],
    searchResultByType: [],
    searchError: '',
    searchErrorByType: '',
    totalUsersCountPage: 0,
    sizeUsersPage: 10,
    activePage: 1,
    preloader: false,
};

export const MovieReducer = (state = initialState, action: UserActionType): InitialMovieStateType => {
    switch (action.type) {
        case TYPE : {
            return {
                ...state, type: action.selectType
            }
        }
        case SEARCH_TITLE : {
            return {
                ...state, searchTitle: action.title
            }
        }
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
        case SEARCH_ERROR : {
            return {
                ...state, searchError: action.error
            }
        }
        case SEARCH_ERROR_BY_TYPE : {
            return {
                ...state, searchErrorByType: action.errorByType
            }
        }
        case SEARCH_RESULT : {
            return {
                ...state, searchResult: action.searchResult
            }
        }
        case SEARCH_RESULT_BY_TYPE : {
            return {
                ...state, searchResultByType: action.searchResultByType
            }
        }
        default:
            return state
    }
}

export const selectTypeAC = (selectType: 'series' | 'movie'): TypeSelectType => ({type: TYPE, selectType} as const);
export const setActivePageMovieAC = (page: number): setPageUsersType => ({type: SET_PAGE_MOVIES, page} as const);
export const setTotalCountMoviePagesAC = (totalCount: number): setTotalCountType => ({type: SET_TOTAL_COUNT, totalCount} as const);
export const setMovieToggleFetchingAC = (preloader: boolean): setToggleFetchingType => ({type: TOGGLE_FETCHING, preloader} as const);
export const setSearchErrorAC = (error: string): SearchErrorType => ({type: SEARCH_ERROR, error} as const);
export const setSearchErrorByTypeAC = (errorByType: string): SearchErrorTypeByType => ({type: SEARCH_ERROR_BY_TYPE, errorByType} as const);
export const setSearchResultAC = (searchResult: Array<MovieResponseType>): SearchResultType => ({type: SEARCH_RESULT, searchResult}as const);
export const setSearchResultByTypeAC = (searchResultByType: Array<MovieResponseType>): SearchTypeByType => ({type: SEARCH_RESULT_BY_TYPE, searchResultByType}as const);
export const setSearchTitleAC = (title: string): SearchTitle => ({type: SEARCH_TITLE, title}as const);

