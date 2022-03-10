import imgProfile from "../mini img/home.png";
import imgMessage from "../mini img/message.png";
import imgNews from "../mini img/News.png";
import imgMusic from "../mini img/music.png";
import imgUser from "../mini img/frend.png";
import imgSettings from "../mini img/setting.png";

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
            to: '/users',
            alt: "img_users",
            nameOfPage: "Find Friends",
            srcImg: imgUser
        },
        {
            to: '/music',
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