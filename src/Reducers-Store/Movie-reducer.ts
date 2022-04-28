export type MoviesActionType =
    | ReturnType<typeof selectTypeAC>
    | ReturnType<typeof setActivePageMovieAC>
    | ReturnType<typeof setTotalCountMoviePagesAC>
    | ReturnType<typeof setMovieToggleFetchingAC>
    | ReturnType<typeof setSearchErrorAC>
    | ReturnType<typeof setSearchErrorByTypeAC>
    | ReturnType<typeof setSearchResultByTypeAC>
    | ReturnType<typeof setSearchTitleAC>
    | ReturnType<typeof setSearchResultAC>;

export type MovieResponseType = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
};
export type SelectTypeMovieType = 'series' | 'movie';
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

const TYPE = "samurai_network/typeMoviesInMoviePage/TYPE";
const SET_PAGE_MOVIES = "samurai_network/setPageMovies/SET_PAGE_MOVIES";
const SET_TOTAL_COUNT = "samurai_network/setTotalCountPage/SET_TOTAL_COUNT";
const TOGGLE_FETCHING = "samurai_network/toggleFetchingInMoviePage/TOGGLE_FETCHING";
const SEARCH_ERROR = "samurai_network/ErrorSearch/SEARCH_ERROR";
const SEARCH_RESULT = "samurai_network/searchResultByTitleInMovie/SEARCH_RESULT";
const SEARCH_RESULT_BY_TYPE = "samurai_network/searchResultByTypeInMovie/SEARCH_RESULT_BY_TYPE";
const SEARCH_TITLE = "samurai_network/searchByTitleInMovie/SEARCH_TITLE";
const SEARCH_ERROR_BY_TYPE = "samurai_network/searchByTypeInMovie/SEARCH_ERROR_BY_TYPE";
const maxValue = 100;

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

export const MovieReducer = (state = initialState, action: MoviesActionType): InitialMovieStateType => {
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
                ...state, totalUsersCountPage: Number(action.totalCount) > maxValue ? maxValue : Number(action.totalCount)
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

export const selectTypeAC = (selectType: 'series' | 'movie') => ({type: TYPE, selectType} as const);
export const setActivePageMovieAC = (page: number) => ({type: SET_PAGE_MOVIES, page} as const);
export const setTotalCountMoviePagesAC = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount} as const);
export const setMovieToggleFetchingAC = (preloader: boolean) => ({type: TOGGLE_FETCHING, preloader} as const);
export const setSearchErrorAC = (error: string) => ({type: SEARCH_ERROR, error} as const);
export const setSearchErrorByTypeAC = (errorByType: string) => ({type: SEARCH_ERROR_BY_TYPE, errorByType} as const);
export const setSearchResultAC = (searchResult: Array<MovieResponseType>) => ({type: SEARCH_RESULT, searchResult}as const);
export const setSearchResultByTypeAC = (searchResultByType: Array<MovieResponseType>) => ({type: SEARCH_RESULT_BY_TYPE, searchResultByType}as const);
export const setSearchTitleAC = (title: string) => ({type: SEARCH_TITLE, title}as const);

