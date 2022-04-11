import {AppThunk} from "../redax/redux-store";
import {NewsAPI} from "../Api/NewsAPI";
import {getNewsAC} from "../redax/News-reducer";
import {isFetchingNewsAC} from "../redax/App-reduser";

export const getFirstNewsTC = (): AppThunk => async dispatch => {
    dispatch(isFetchingNewsAC(true));
    const response = await NewsAPI.getFirstNews();
    response.map((el, i) => {
            if (i < response.length - 1) {
                return NewsAPI.getNews(el.toString())
                    .then(response => {
                        const responseAndId = {...response, id: el}
                        dispatch(getNewsAC(responseAndId))
                    })
            } else {
                return NewsAPI.getNews(el.toString())
                    .then(response => {
                        const responseAndId = {...response, id: el}
                        dispatch(getNewsAC(responseAndId))
                        dispatch(isFetchingNewsAC(false))
                    })
            }

        }
    )

}


