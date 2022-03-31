import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../redax/redux-store";

export function WithAuthRedirect<T> (Component: ComponentType<T>) {

    const RedirectComponent = (props: any) => {

        const isAuth  = useSelector<AppStateType, boolean>(state => state.AuthorizationReducer.isAuth);
        if (!isAuth) return (<Navigate to='/signIn' />);

        return <Component {...props as T}/>

    }

    return RedirectComponent
}