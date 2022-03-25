import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./Profile-reducer";
import {DialogsReducer} from "./Dialogs-reducer";
import {SideBarReducer} from "./SideBar-reducer";
import {UsersReducer} from "./Users-reducer";
import {NavigateBarReducer} from "./Navigate-reducer";
import {AuthorizationReducer} from "./Authorization-reducer";
import {MovieReducer} from "./Movie-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    ProfileReducer,
    DialogsReducer,
    SideBarReducer,
    UsersReducer,
    NavigateBarReducer,
    AuthorizationReducer,
    MovieReducer,
})

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;
