import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./Profile-reducer";
import {DialogsReducer} from "./Dialogs-reducer";
import {SideBarReducer} from "./SideBar-reducer";
import {UsersReducer} from "./Users-reducer";
import {NavigateBarReducer} from "./Navigate-reducer";
import {AuthorizationReducer} from "./Authorization-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    ProfileReducer,
    DialogsReducer,
    SideBarReducer,
    UsersReducer,
    NavigateBarReducer,
    AuthorizationReducer,
})

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;
