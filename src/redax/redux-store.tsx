import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./Profile-reducer";
import {DialogsReducer} from "./Dialogs-reducer";
import {SideBarReducer} from "./SideBar-reducer";
import {UsersReducer} from "./Users-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    ProfileReducer,
    DialogsReducer,
    SideBarReducer,
    UsersReducer
})

export const store = createStore(rootReducer);
