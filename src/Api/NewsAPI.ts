import axios from "axios";
import {NewsResponseType} from "../Reducers-Store/News-reducer";

export const instanceNews = axios.create({
    baseURL: "https://virtualbrest.ru/",
})

export const NewsAPI = {

    getFirstNews() {
        return instanceNews.get<string[]>(`android.php`)
            .then(response => response.data)
    },

    getNews(numberNews: string) {
        return instanceNews.get<NewsResponseType>(`android.php?pdaid=${numberNews}&json=1`)
            .then(response => response.data);
    },
}

