import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {ProfileActionsType, ProfileReducer} from "./Profile-reducer";
import {DialogsActionReducer, DialogsReducer} from "./Dialogs-reducer";
import {ActionsSideBarType, SideBarReducer} from "./SideBar-reducer";
import {UserActionType, UsersReducer} from "./Users-reducer";
import {ActionsNavigateType, NavigateBarReducer} from "./Navigate-reducer";
import {AuthActionType, AuthorizationReducer} from "./Authorization-reducer";
import {MoviesActionType, MovieReducer} from "./Movie-reducer";
import {NewsActionType, NewsReducer} from "./News-reducer";
import {AppActionType, AppReducer} from "./App-reduser";
import {MusicActionType, MusicReducer} from "./Music-reduser";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    ProfileReducer,
    DialogsReducer,
    SideBarReducer,
    UsersReducer,
    NavigateBarReducer,
    AuthorizationReducer,
    MovieReducer,
    NewsReducer,
    AppReducer,
    MusicReducer,
})

// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


export type GlobalActionType =
    | AppActionType
    | NewsActionType
    | ProfileActionsType
    | ActionsSideBarType
    | DialogsActionReducer
    | UserActionType
    | ActionsNavigateType
    | AuthActionType
    | MoviesActionType
    | MusicActionType;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, GlobalActionType> ;
