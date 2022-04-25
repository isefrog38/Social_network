import axios from "axios";
import {GlobalTypeMusic} from "../Type/API-types/MusicTypes";

export const instanceMusic = axios.create({
    baseURL: "https://itunes.apple.com/",
    withCredentials: true,
    headers: {},
});


export const MusicApi = {
    getMusicSearchResult(title: string) {
        return instanceMusic.get<GlobalTypeMusic>(`search?term=${title}`)
            .then(response => response.data)
    }
};