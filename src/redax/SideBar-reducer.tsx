export type SideBarType = {
    id: number
    name: string
    avatar: string
};
type InitialSideBarType = {
    sideBar: Array<SideBarType>
};
type ActionsSideBarType = {};

let initialState: InitialSideBarType = {
    sideBar: [
        {
            id: 1,
            name: 'Dimych',
            avatar: 'https://image.freepik.com/free-vector/flat-doctor-avatar-for-website-chat-window-support-message-chatting-app-isolated-on-white-background_111651-583.jpg'
        },
        {
            id: 2,
            name: 'Andrey',
            avatar: 'https://image.freepik.com/vecteurs-libre/icone-personnage-avatar-masculin-isole_24877-23105.jpg'
        },
        {
            id: 3,
            name: 'Sveta',
            avatar: 'https://media.istockphoto.com/vectors/people-happy-face-woman-icon-vector-id650937050'
        },
    ]
};

export const SideBarReducer = (state = initialState, action: ActionsSideBarType)/*: InitialSideBarType */=> {
    switch (action) {

        default:
            return state
    }
}