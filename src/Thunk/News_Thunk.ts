import {AppThunk} from "../redax/redux-store";
import {NewsAPI} from "../Api/NewsAPI";
import {getNewsAC} from "../redax/News-reducer";


/*
function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/


export const getNewsTC = (newsId: string): AppThunk => async dispatch => {
    const response = await NewsAPI.getNews(newsId);
    dispatch(getNewsAC(response));
}


export const getFirstNewsTC = (): AppThunk => async dispatch => {
    const response = await NewsAPI.getFirstNews();
    response.map(el => {
            NewsAPI.getNews(el.toString())
                .then(response =>
                    dispatch(getNewsAC(response))
                )
        }
    )

}


