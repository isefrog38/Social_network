//import {ProfileReducer} from "./Profile-reducer";
//import {DialogsReducer} from "./Dialogs-reducer";
//import {SideBarReducer} from "./SideBar-reducer";

export const store: StoreType = {
    _state: {
        myPostPage: {
            myPostData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 90},
                {id: 3, message: 'Yea ) ', likesCount: 24},
                {id: 4, message: 'Second post', likesCount: 116},
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
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
                {
                    id: 4,
                    name: 'Sasha',
                    avatar: 'https://thumbs.dreamstime.com/b/smiling-avatar-girl-graphic-wearing-dark-clothes-eyeglasses-front-view-over-isolated-background-illustration-73284769.jpg'
                },
                {
                    id: 5,
                    name: 'Artem',
                    avatar: 'https://previews.123rf.com/images/yupiramos/yupiramos1802/yupiramos180229973/96297654-jeune-homme-mod%C3%A8le-avec-des-lunettes-avatar-caract%C3%A8re-conception-vecteur-illustration.jpg'
                },
                {
                    id: 6,
                    name: 'Viktor',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHcOFyZ63Q3NHwvUzvLbxfPw-im6W36IKCFQTq1liVzMfwWGDKLbyzl2kdnTd2JWB83hc&usqp=CAU'
                }
            ],

            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How a you'},
                {id: 3, message: 'Artem?'},
                {id: 4, message: 'Yo'},
            ],
            textMessage: "",

        },
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
    },
    _callSubscriber(_state: RootStateType) {
        console.log("changed render")
    },

    getState() {
        return this._state;
    },
    subscriber(observer: (props: RootStateType) => void) {
        this._callSubscriber = observer;
    },

    dispatch(action: ActionsType) {
        //ProfileReducer(this._state.myPostPage, action)
        //DialogsReducer(this._state.dialogsPage, action)
        /*SideBarReducer(this._state.sideBar, action)*/

        this._callSubscriber(this._state);

        /*this._state.myPostPage = ProfileReducer(this._state.myPostPage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = SideBarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state);*/

    }
}

type MessageType = {
    id: number
    message: string
};
type DialogType = {
    id: number
    name: string
    avatar: string
};
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    textMessage: string
};
type MyPostsUserType = {
    id: number
    message: string
    likesCount: number
};
type MyPostPageType = {
    myPostData: Array<MyPostsUserType>
    newPostText?: string
};
type RootStateType = {
    myPostPage: MyPostPageType
    dialogsPage: DialogPageType
    sideBar: Array<SideBarType>
};
type SideBarType = {
    id: number
    name: string
    avatar: string
};
type StoreType = {
    _state: RootStateType
    _callSubscriber: (_state: RootStateType) => void
    getState: () => RootStateType
    subscriber: (observer: (_state: RootStateType) => void ) => void
    dispatch: ( action: ActionsType) => void
};
type AddPostActionType = {
    type: "ADD-POST"
};
type AddMessageActionType = {
    type: "ADD-MESSAGE"
};
type UpdateNewPostTextActionType = {
    type : "UPDATE-NEW-POST-TEXT"
    newPostText: string
};
type TextMessageFromPostActionType = {
    type: "TEXT-MESSAGE-FROM-POST"
    newTextMessage: string
} ;
type ActionsType = AddPostActionType | AddMessageActionType | UpdateNewPostTextActionType | TextMessageFromPostActionType
