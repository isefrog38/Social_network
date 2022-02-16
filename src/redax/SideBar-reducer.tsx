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
            name: "Micael Philips",
            avatar: 'https://oir.mobi/uploads/posts/2021-05/1620197401_11-oir_mobi-p-karlikovii-kenguru-zhivotnie-krasivo-foto-14.jpg'
        },
        {
            id: 2,
            name: "Joan Osborne",
            avatar: 'https://zelenyjmir.ru/wp-content/uploads/2017/06/Kenguru-40.jpg'
        },
        {
            id: 3,
            name: "Richard Mille",
            avatar: 'https://yaizakon.com.ua/wp-content/uploads/2019/10/1427402253_kenguru5-e1480942003641.jpg'
        }
    ]
};

export const SideBarReducer = (state = initialState, action: ActionsSideBarType)/*: InitialSideBarType */=> {
    switch (action) {

        default:
            return state
    }
}