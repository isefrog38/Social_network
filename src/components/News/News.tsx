import React from "react";
import s from "./News.module.css";
import {getNewsTC} from "../../Thunk/News_Thunk";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {NewsInitialStateType} from "../../redax/News-reducer";
import {AuthRedirect} from "../../HOC/AuthRedirect";

const News = () => {

    const stateNews = useSelector<AppStateType, NewsInitialStateType>(state => state.NewsReducer);
    const dispatch = useDispatch();


    const MapingNews = stateNews.map(el => (
        <div className={s.small_block_news}>
            <div className={s.title_block}>
                <div className={s.title}>{el.title}</div>
            </div>
            {/*<div className={s.photo_news}>*/}
            {/*    <img className={s.img_news} src="#sw" alt="alt"/>*/}
            {/*</div>*/}
            <div className={s.description} dangerouslySetInnerHTML={{__html: el.content}}/>
            <div className={s.date_block}>
                <div className={s.date} dangerouslySetInnerHTML={{__html: el.data}}/>
            </div>
        </div>
    ));

    return (
        <div className={s.main_news_block}>
            <div className={s.block_news}>
                {MapingNews}
            </div>

            <div className={s.block_tools_news}>
                <button onClick={() => dispatch(getNewsTC())}>NEWS GET</button>
            </div>
        </div>
    )
}

export default AuthRedirect(News);