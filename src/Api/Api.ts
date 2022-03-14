import axios from "axios";


export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "46d03c13-5122-4b12-95a1-e807d8a6bece"
    },
})

export const getUsers = (activePage: number = 1, sizeUsersPage: number = 10) => {
   return instance.get(`users?page=${activePage}&count=${sizeUsersPage}`)
       .then(response => {
           return response.data;
       })
}

export const onPageChanged = (activePage: number, sizeUsersPage: number) => {
   return instance.get(`users?page=${activePage}&count=${sizeUsersPage}`)
       .then(response => {
           return response.data;
       })
}

export const getUserProfile = (userId: string) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
            return response.data
        })
}

export const followFunction = (id: number) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
        .then(response => {
            return response.data
        })
}

export const unfollowFunction = (id: number) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
        .then(response => {
            return response.data
        })
}

