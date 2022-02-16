import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./Profile-reducer";
import {DialogsReducer} from "./Dialogs-reducer";
import {SideBarReducer} from "./SideBar-reducer";
import {UsersReducer} from "./Users-reducer";

const rootReducer = combineReducers({
    ProfileReducer,
    DialogsReducer,
    SideBarReducer,
    UsersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);
