import React from "react";
import s from "./News.module.css";
import {getNewsTC} from "../../Thunk/News_Thunk";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {NewsInitialStateType} from "../../redax/News-reducer";

const News = () => {

    const stateNews = useSelector<AppStateType, NewsInitialStateType>(state => state.NewsReducer);
    const dispatch = useDispatch();

    const MapingNews = stateNews.map(el => (
        <div className={s.small_block_news}>
            <div className={s.name_news}>{el.title}</div>
            <img className={s.img_news} src="#sw" alt="alt"/>
            <div className={s.description}>{el.content}</div>
        </div>
    ));

    return (
        <div className={s.main_news_block}>
            <div className={s.block_news}>
                {MapingNews}
                {/*<div className={s.small_block_news}>
                    <div className={s.name_news}>title</div>
                    <img className={s.img_news} src="#sw" alt="alt"/>
                    <div className={s.description}>Description</div>
                </div>*/}
            </div>

            <div className={s.block_tools_news}>
                <button onClick={() => dispatch(getNewsTC())}>NEWS GET</button>
            </div>
        </div>
    )
}

export default News