let rerenderEntireTree = (state: RootStateType) => {
    console.log("changed render")
}

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    textMessage: string
}
export type MyPostsDataType = {
    id: number
    message: string
    likesCount: number
}
export type MyPostPageType = {
    myPostData: Array<MyPostsDataType>
    newPostText: string
}
export type RootStateType = {
    myPostPage: MyPostPageType
    dialogsPage: DialogPageType
    sideBar: Array<SideBarType>
}
export type SideBarType = {
    id: number
    name: string
    avatar: string
}

export let state: RootStateType = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.myPostPage.newPostText,
        likesCount: 0
    }
    state.myPostPage.myPostData.push(newPost)
    rerenderEntireTree(state)
    updateNewPostText("")
}

export const updateNewPostText = (newText: string) => {
    state.myPostPage.newPostText = newText
    rerenderEntireTree(state)
}

export const addMessage = () => {
    let newMessageSet = {
        id: 5,
        message: state.dialogsPage.textMessage,
    }
    state.dialogsPage.messages.push(newMessageSet)
    rerenderEntireTree(state)
    textMessageFromPost("")
}

export const textMessageFromPost = (newMessage: string) => {
    state.dialogsPage.textMessage = newMessage
    rerenderEntireTree(state)
}

export const subscriber = (observer: (props: RootStateType) => void) => {
    rerenderEntireTree = observer;
}