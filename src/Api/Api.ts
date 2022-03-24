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
       .then(response => response.data);
}

export const onPageChanged = (page: number, sizeUsersPage: number) => {
   return instance.get(`users?page=${page}&count=${sizeUsersPage}`)
       .then(response => response.data);
}

export const getUserProfile = (userId: string) => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => response.data);
}

export const followFunction = (id: number) => {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
        .then(response => response.data);
}

export const unfollowFunction = (id: number) => {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
        .then(response => response.data);
}

