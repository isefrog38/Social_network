import {GlobalTypeMusic, ResultsMusicType} from "../Type/API-types/MusicTypes";


export type MusicActionType = | ReturnType<typeof setAllResultSearchAC> | ReturnType<typeof setShowInfoArtistAC>;

export type MusicInitialStateType = {
    "resultCount": number | null
    "results": ResultsMusicType[]
    "showInfo"?: ResultsMusicType | null
};

const MusicState: MusicInitialStateType = {
    resultCount: null,
    results: [],
    showInfo: null,
};


export const MusicReducer = (state = MusicState, action: MusicActionType): MusicInitialStateType => {
    switch (action.type) {
        case "SET_MUSIC_DATA" :
            return {...action.data}
        case "SET_INFO_TRACK" :
            return {
                ...state, showInfo: action.trackId !== null ? {...action.trackId} : null
            }
        default:
            return state
    }
}


export const setAllResultSearchAC = (data: GlobalTypeMusic) => ({type: "SET_MUSIC_DATA", data} as const);
export const setShowInfoArtistAC = (trackId: ResultsMusicType | null) => ({type: "SET_INFO_TRACK", trackId} as const);



