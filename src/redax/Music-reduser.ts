import {responseGlobalType} from "../Api/MusicAPI";

export type MusicActionType = | ReturnType<typeof setAllResultSearchAC> ;

export type MusicInitialStateType = {
    data: responseGlobalType
};

const MusicState: MusicInitialStateType = {
    data: {
        data: [],
        ["paging"]: {
            next: ''
        }
    }
};


export const MusicReducer = (state = MusicState, action: MusicActionType): MusicInitialStateType => {
    switch (action.type) {
            case "NEWBLABLA" :
                console.log(action.data.data)
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}


export const setAllResultSearchAC = (data: responseGlobalType) => ({type: "NEWBLABLA", data} as const );



