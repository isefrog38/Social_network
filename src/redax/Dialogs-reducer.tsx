import {ActionsType, AddMessageActionType, TextMessageFromPostActionType} from "./Profile-reducer";
export type MessageType = {
    id: number
    message: string
};
export type DialogType = {
    id: number
    name: string
    avatar: string
};
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    textMessage: string
};

const ADD_MESSAGE = "ADD-MESSAGE";
const TEXT_MESSAGE_FROM_POST = "TEXT-MESSAGE-FROM-POST";

type InitilaStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    textMessage: string
}

let initialState: InitilaStateType = {
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

}

export const DialogsReducer = (state: DialogPageType = initialState, action: ActionsType): DialogPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
        return {
            ...state, messages:
                [...state.messages, {id: 5, message: state.textMessage ? state.textMessage : ''}],
            textMessage: ""
        }
        case TEXT_MESSAGE_FROM_POST:
            return {
                ...state,
                textMessage: action.newTextMessage
            }
        default:
            return state;
    }
};


export const addMessageActionCreator = (): AddMessageActionType => ({type: ADD_MESSAGE });

export const onChangeMessageActionCreator = (text: string): TextMessageFromPostActionType => {
    return {type: TEXT_MESSAGE_FROM_POST, newTextMessage: text};
}