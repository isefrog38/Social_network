import axios from "axios";
import {log} from "util";

export type MovieResponceType = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

export const instanceUsers = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "46d03c13-5122-4b12-95a1-e807d8a6bece"
    },
})

export const getUsers = (activePage: number = 1, sizeUsersPage: number = 10) => {
   return instanceUsers.get(`users?page=${activePage}&count=${sizeUsersPage}`)
       .then(response => response.data);
}

export const onPageChanged = (page: number, sizeUsersPage: number) => {
   return instanceUsers.get(`users?page=${page}&count=${sizeUsersPage}`)
       .then(response => response.data);
}

export const getUserProfile = (userId: string) => {
    return instanceUsers.get(`profile/${userId}`)
        .then(response => response.data);
}

export const followFunction = (id: number) => {
    return instanceUsers.post(`follow/${id}`)
        .then(response => response.data);
}

export const unfollowFunction = (id: number) => {
    return instanceUsers.delete(`follow/${id}`)
        .then(response => response.data);
}

let key = '93abb66b';

export const instanceMovies = axios.create({
    baseURL: `http://www.omdbapi.com/`,
})

export const  searchFilmsByTitle = (title: string) => {
    return instanceMovies.get(`?apikey=${key}&s=${title}`)
}

export const onPageMoviesChanged = (page: number, sizeUsersPage: number) => {
    return instanceMovies.get(`?apikey=${key}&page=${page}&count=${sizeUsersPage}`)
        .then(data => console.log(data))
}
onPageMoviesChanged(2,10)





    /*searchFilmsByType: (title: string, type: string) => {
    }*/


