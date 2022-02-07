import {ActionsType, AddMessageActionType, DialogPageType, RootStateType, TextMessageFromPostActionType} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE";
const TEXT_MESSAGE_FROM_POST = "TEXT-MESSAGE-FROM-POST";

export const DialogsReducer = (state: DialogPageType, action: ActionsType): DialogPageType => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessageSet = {
                id: 5,
                message: state.textMessage ? state.textMessage : '',
            }
            state.messages.push(newMessageSet);
            state.textMessage = '';
            return state;
        case TEXT_MESSAGE_FROM_POST:
            state.textMessage = action.newTextMessage;
            return state;
        default:
            return state;
    }
    /* if (action.type === ADD_MESSAGE) {
        let newMessageSet = {
            id: 5,
            message: state.textMessage ? state.textMessage : '',
        }
        state.messages.push(newMessageSet);
        state.textMessage = '';
    }  else if (action.type === TEXT_MESSAGE_FROM_POST) {
        state.textMessage = action.newTextMessage;
    }*/
};


export const addMessageActionCreator = (): AddMessageActionType => ({type: ADD_MESSAGE });

export const onChangeMessageActionCreator = (text: string): TextMessageFromPostActionType => {
    return {type: TEXT_MESSAGE_FROM_POST, newTextMessage: text};
}