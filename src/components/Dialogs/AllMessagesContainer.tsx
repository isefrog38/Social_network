import {connect} from "react-redux";
import {AllMessages} from "./AllMessages";
import {Dispatch} from "redux";
import {addMessageActionCreator, MessageType, onChangeMessageActionCreator} from "../../redax/Dialogs-reducer";
import {AppStateType} from "../../redax/store";

export type AllMessagePropsType = MapDispatchToProps & MapStateToProps;
type MapStateToProps = {
    addMessage: () => void
    onChangeMessage: (text: string) => void
};
type MapDispatchToProps = {
    renderMessages: Array<MessageType>
        messageText: string
};

const MapStateToProps = (state: AppStateType): MapDispatchToProps => {
    return {
        renderMessages: state.DialogsReducer.messages,
        messageText: state.DialogsReducer.textMessage,
    }
}

const MapDispatchToProps = (dispatch: Dispatch): MapStateToProps => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onChangeMessage: (text: string) => {
            dispatch(onChangeMessageActionCreator(text))
        }
    }
}

export const AllMessagesContainer = connect(MapStateToProps, MapDispatchToProps)(AllMessages);


