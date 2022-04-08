import {AppThunk} from "../redax/redux-store";
import {NewsAPI} from "../Api/NewsAPI";
import {getNewsAC} from "../redax/News-reducer";


function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



export const getNewsTC = (): AppThunk => async dispatch => {
    const response = await NewsAPI.getNews(random(1, 100000).toString());
    let {data, content, title} = response;
    let  response1 = {data, content, title};
    console.log(response1)
        dispatch(getNewsAC(response1));
}