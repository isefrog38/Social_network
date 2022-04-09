import React, {useEffect, useState} from "react";
import s from "./News.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {NewsInitialStateType} from "../../redax/News-reducer";
import {AuthRedirect} from "../../HOC/AuthRedirect";
import {getFirstNewsTC} from "../../Thunk/News_Thunk";
import {Preloader} from "../SmallComponents/Preloader/Preloader";
import {AppInitialStateType} from "../../redax/App-reduser";
import {animateScroll as scroll} from 'react-scroll';

const News = () => {

    const [activeNews, setActiveNews] = useState<boolean>(false);
    const stateNews = useSelector<AppStateType, NewsInitialStateType>(state => state.NewsReducer);
    const {isFetching} = useSelector<AppStateType, AppInitialStateType>(state => state.AppReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFirstNewsTC())
    }, [])


    const onClickNewsHandler = () => {
        setActiveNews(!activeNews)
    }

    const MapingNews = stateNews.map((el, i) => (
        <div className={s.small_block_news} key={i}>
            <div className={s.image_preview}>
                <img className={s.img_small} src={el.img} alt={el.data}/>
            </div>
            <div className={s.block_title_and_description}>
                <div className={s.title_block}>
                    <div className={s.title}>{el.title}</div>
                </div>
                <div className={s.description} dangerouslySetInnerHTML={{__html: el.content}}/>
            </div>
            {/*<div className={s.exemple}><div dangerouslySetInnerHTML={{__html: el.content}}/></div>*/}
        </div>
    ));

    if (isFetching) return <Preloader/>

    return (
        <>
            <div className={s.main_news_block}>
                <div className={s.block_news}>
                    {MapingNews}
                </div>
            </div>


            <div className={s.block_tools_news}>
                <div className={s.arrow_down} onClick={() => scroll.scrollToBottom()}>
                    <span/>
                    <span/>
                    <span/>
                </div>
                <div className={s.arrow_up} onClick={() => scroll.scrollToTop()}>
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
        </>
    )
}

export default AuthRedirect(News);


/*
const MapingNews = stateNews.map(el => (
    <div className={s.small_block_news}>
        <div className={s.title_block}>
            <div className={s.title}>{el.title}</div>
        </div>
        {/!*<div className={s.photo_news}>
                <img className={s.img_news} src={el.img_pervaya} alt={el.data}/>
            </div>*!/}
        <div className={s.description} dangerouslySetInnerHTML={{__html: el.content}}/>
        <div className={s.date_block}>
            <div className={s.date} dangerouslySetInnerHTML={{__html: el.data}}/>
        </div>
    </div>
));
*/
