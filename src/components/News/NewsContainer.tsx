import React from 'react';
import {OneNews} from "./OneNews/OneNews";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Reducers-Store/store";
import {NewsInitialStateType} from "../../Reducers-Store/News-reducer";

const NewsContainer = () => {

    const stateNews = useSelector<AppStateType, NewsInitialStateType>(state => state.NewsReducer);

    return (
        <>
            <OneNews stateNews={stateNews} nextPath={"/news"}/>
        </>
    );
};

export default NewsContainer;