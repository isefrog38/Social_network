import imgProfile from "../Assets/mini img/home.png";
import imgMessage from "../Assets/mini img/message.png";
import imgNews from "../Assets/mini img/News.png";
import imgMusic from "../Assets/mini img/music.png";
import imgUser from "../Assets/mini img/frend.png";
import imgMovie from "../Assets/mini img/1179120.png";
import imgSettings from "../Assets/mini img/setting.png";

export type NavigateBarType = {
    to: string
    alt: string
    nameOfPage: string
    srcImg: string
};
type InitialSideBarType = {
    navigateBar: Array<NavigateBarType>
};
type ActionsSideBarType = {};

let initialState: InitialSideBarType = {
    navigateBar: [
        {
            to: '/profile',
            alt: "img_profile",
            nameOfPage: "Profile",
            srcImg: imgProfile
        },
        {
            to: '/dialogs',
            alt: "img_message",
            nameOfPage: "Message",
            srcImg: imgMessage
        },
        {
            to: '/users',
            alt: "img_users",
            nameOfPage: "Users",
            srcImg: imgUser
        },
        {
            to: '/news',
            alt: "img_news",
            nameOfPage: "News",
            srcImg: imgNews
        },
        {
            to: '/music',
            alt: "img_music",
            nameOfPage: "Music",
            srcImg: imgMusic
        },
        {
            to: '/movies',
            alt: "img_movies",
            nameOfPage: "Movies",
            srcImg: imgMovie
        },
        {
            to: '/settings',
            alt: "img_setting",
            nameOfPage: "Setting",
            srcImg: imgSettings
        },
    ]
};

export const NavigateBarReducer = (state = initialState, action: ActionsSideBarType)/*: InitialSideBarType */=> {
    switch (action) {

        default:
            return state
    }
}