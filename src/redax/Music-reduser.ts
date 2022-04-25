import {GlobalTypeMusic, ResultsMusicType} from "../Type/API-types/MusicTypes";


export type MusicActionType = | ReturnType<typeof setAllResultSearchAC> ;

export type MusicInitialStateType = {
    "resultCount": number | null
    "results": ResultsMusicType[]
};

const MusicState: MusicInitialStateType = {
    resultCount: null,
    results: []
};


export const MusicReducer = (state = MusicState, action: MusicActionType): MusicInitialStateType => {
    switch (action.type) {
            case "NEWBLABLA" :
            return { ...action.data }
        default:
            return state
    }
}


export const setAllResultSearchAC = (data: any) => ({type: "NEWBLABLA", data} as const );



