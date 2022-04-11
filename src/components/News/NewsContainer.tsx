import React from 'react';
import {OneNews} from "./OneNews/OneNews";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {NewsInitialStateType} from "../../redax/News-reducer";

export const NewsContainer = () => {

    const stateNews = useSelector<AppStateType, NewsInitialStateType>(state => state.NewsReducer);

    return (
        <>
            <OneNews stateNews={stateNews}/>

        </>
    );
};
