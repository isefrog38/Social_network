import axios from "axios";

export type responseGlobalType = {
    data: responseType[],
    "paging": {
        "next": string
    }
};

export type responseType = {
    "key": string,
    "url": string,
    "name": string,
    "tags": [],
    "created_time": string,
    "updated_time": string,
    "play_count": number,
    "favorite_count": number,
    "comment_count": number,
    "listener_count": number,
    "repost_count": number,
    "pictures": {
        "small": string,
        "thumbnail": string,
        "medium_mobile": string,
        "medium": string,
        "large": string,
        "320wx320h": string,
        "extra_large": string,
        "640wx640h": string,
        "768wx768h": string,
        "1024wx1024h": string
    },
    "slug": string,
    "user": {
        "key": string,
        "url": string,
        "name": string,
        "username": string,
        "pictures": {
            "small": string,
            "thumbnail": string,
            "medium_mobile": string,
            "medium": string,
            "large": string,
            "320wx320h": string,
            "extra_large": string,
            "640wx640h": string
        }
    },
    "audio_length": number
};




export const instanceMusic = axios.create({
    baseURL: "https://api.mixcloud.com",
    withCredentials: true,
    headers: {},
});


export const MusicApi = {
    getMusicSearchResult(title: string) {
        return instanceMusic.get<responseGlobalType>(`/search/?q=${title}&type=cloudcast`)
            .then(response => response.data)
    }
}
