import {AppThunk} from "../redax/redux-store";
import {NewsAPI} from "../Api/NewsAPI";
import {getNewsAC} from "../redax/News-reducer";
import {isFetchingNewsAC} from "../redax/App-reduser";


export const getNewsTC = (newsId: string): AppThunk => async dispatch => {
    const response = await NewsAPI.getNews(newsId);
    dispatch(getNewsAC(response));
    dispatch(isFetchingNewsAC(false));
}


export const getFirstNewsTC = (): AppThunk => async dispatch => {
    dispatch(isFetchingNewsAC(true));
    const response = await NewsAPI.getFirstNews();
    response.map((el, i) => {
            if (i < response.length -1 ) {
                return NewsAPI.getNews(el.toString())
                    .then(response =>
                        dispatch(getNewsAC(response))
                    )
            } else {
                return NewsAPI.getNews(el.toString())
                    .then(response => {
                            dispatch(getNewsAC(response))
                            dispatch(isFetchingNewsAC(false))
                        }
                    )
            }

        }
    )

}


