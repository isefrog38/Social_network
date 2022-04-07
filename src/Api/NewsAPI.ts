import axios from "axios";
import {NewsResponseType} from "../redax/News-reducer";

export const instanceNews = axios.create({
    baseURL: "https://virtualbrest.ru/",
})

export const NewsAPI = {

    getNews(numberNews: string) {
        return instanceNews.get<NewsResponseType>(`android.php?pdaid=${numberNews}&json=1`)
            .then(response => response.data);
    },
}

