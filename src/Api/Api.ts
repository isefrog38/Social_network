import axios from "axios";
import {ResponseGetAuthType, ResponseType} from "../Type/API-types/API-Types";

export const instanceUsers = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "46d03c13-5122-4b12-95a1-e807d8a6bece"
    },
})

export const UsersAPI = {

    getUsers(activePage: number = 1, sizeUsersPage: number = 10) {
        return instanceUsers.get(`users?page=${activePage}&count=${sizeUsersPage}`)
            .then(response => response.data);
    },

    onPageChanged(page: number, sizeUsersPage: number) {
        return instanceUsers.get(`users?page=${page}&count=${sizeUsersPage}`)
            .then(response => response.data);
    },

    getUserProfile(userId: string) {
        return instanceUsers.get(`profile/${userId}`)
            .then(response => response.data);
    },

    updateStatus(status: string) {
        return instanceUsers.put(`profile/status/`, {status: status})
            .then(response => response.data);
    },

    getStatus(userId: string) {
        return instanceUsers.get(`profile/status/${userId}`)
            .then(response => response.data);
    },

    followFunction(id: number) {
        return instanceUsers.post(`follow/${id}`)
            .then(response => response.data);
    },

    unfollowFunction(id: number) {
        return instanceUsers.delete(`follow/${id}`)
            .then(response => response.data);
    },
}

/// next api

let apiKey = '93abb66b';

export const instanceMovies = axios.create({
    baseURL: `https://www.omdbapi.com/`,
})


export const MoviesAPI = {
    searchFilmsByTitle(title: string) {
        return instanceMovies.get(`?apikey=${apiKey}&s=${title}`)
    },

    onPageMoviesChanged(title: string, page: number) {
        return instanceMovies.get(`?apikey=${apiKey}&s=${title}&type=movie&page=${page}`)
    },

    searchFilmsByType(title: string, type: string) {
        return instanceMovies.get(`?apikey=${apiKey}&s=${title}&type=${type}`)
    },
}


export const instanceAuthLogin = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "46d03c13-5122-4b12-95a1-e807d8a6bece"
    },
})

export const AuthAPI = {
    AuthUser() {
        return instanceUsers.get<ResponseGetAuthType>(`auth/me`)
            .then(response => response.data);
    },

    SignIn(email: string, password: string, rememberMe: boolean, captcha: boolean) {
        return instanceAuthLogin.post<ResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },

    LogOut() {
        return instanceAuthLogin.delete<ResponseType>(`auth/login`)
            .then(response => response.data)
    }
}
