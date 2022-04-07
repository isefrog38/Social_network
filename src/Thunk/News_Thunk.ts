import {AppThunk} from "../redax/redux-store";
import {NewsAPI} from "../Api/NewsAPI";
import {getNewsAC} from "../redax/News-reducer";

export const getNewsTC = (): AppThunk => async dispatch => {
    const response = await NewsAPI.getNews('100000');
    let {data, content, title} = response;
    let  response1 = {data: "yet", content: "yo", title: "title"};
    console.log(response1)
        dispatch(getNewsAC(response1));
}