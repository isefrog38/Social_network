import {AppThunk} from "../Reducers-Store/store";
import {MusicApi} from "../Api/MusicAPI";
import {setAllResultSearchAC} from "../Reducers-Store/Music-reduser";


export const MusicTC = (title: string): AppThunk => async dispatch => {
    const response = await MusicApi.getMusicSearchResult(title)
        dispatch(setAllResultSearchAC(response))
}
