import {AppThunk} from "../redax/store";
import {MusicApi} from "../Api/MusicAPI";
import {setAllResultSearchAC} from "../redax/Music-reduser";


export const MusicTC = (title: string): AppThunk => async dispatch => {
    const response = await MusicApi.getMusicSearchResult(title)
        dispatch(setAllResultSearchAC(response))
}
