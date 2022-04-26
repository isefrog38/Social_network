import {GlobalTypeMusic, ResultsMusicType} from "../Type/API-types/MusicTypes";


export type MusicActionType =
    | ReturnType<typeof deleteBookmarksTrackAC>
    | ReturnType<typeof setBookmarksTrackAC>
    | ReturnType<typeof setAllResultSearchAC>
    | ReturnType<typeof setShowInfoArtistAC>;

export type MusicInitialStateType = {
    "resultCount": number | null
    "results": ResultsMusicType[]
    "showInfo": ResultsMusicType | null
    "bookmark": number[]
};

const MusicState: MusicInitialStateType = {
    resultCount: null,
    results: [],
    showInfo: null,
    bookmark: [],
};


export const MusicReducer = (state = MusicState, action: MusicActionType): MusicInitialStateType => {
    switch (action.type) {
        case "SET_MUSIC_DATA" :
            return {...action.data, bookmark: [], showInfo: null}
        case "SET_INFO_TRACK" :
            return {
                ...state, showInfo: action.track
            }
        case "SET_BOOKMARKS_TRACK" :
            return {
                ...state, bookmark: [...state.bookmark, action.trackId]
            }
        case "DELETE_BOOKMARKS_TRACK" :
            return {
                ...state, bookmark: state.bookmark.filter(el => el !== action.trackId)
            }
        default:
            return state
    }
}


export const setAllResultSearchAC = (data: GlobalTypeMusic) => ({type: "SET_MUSIC_DATA", data} as const);
export const setShowInfoArtistAC = (track: ResultsMusicType | null) => ({type: "SET_INFO_TRACK", track} as const);
export const setBookmarksTrackAC = (trackId: number) => ({type: "SET_BOOKMARKS_TRACK", trackId} as const);
export const deleteBookmarksTrackAC = (trackId: number) => ({type: "DELETE_BOOKMARKS_TRACK", trackId} as const);



