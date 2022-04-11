import React, {useEffect} from "react";
import s from "./News.module.css";
import {NewsInitialStateType} from "../../redax/News-reducer";
import {AuthRedirect} from "../../HOC/AuthRedirect";
import {Preloader} from "../SmallComponents/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {AppInitialStateType} from "../../redax/App-reduser";
import {getFirstNewsTC} from "../../Thunk/News_Thunk";
import {ArrowScroll} from "../SmallComponents/ArrowScroll/ArrowScroll";

const News = () => {

    const stateNews = useSelector<AppStateType, NewsInitialStateType>(state => state.NewsReducer);
    const {isFetching} = useSelector<AppStateType, AppInitialStateType>(state => state.AppReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFirstNewsTC())
    }, [])


    const MapingNews = stateNews.map((el, i) => (
        <NavLink to={`/news/${el.id}`} key={i}>
            <div className={s.small_block_news}>
                <div className={s.image_preview}>
                    <img className={s.img_small} src={el.img} alt={el.data}/>
                </div>
                <div className={s.block_title_and_description}>
                    <div className={s.title_block}>
                        <div className={s.title}>{el.title}</div>
                    </div>
                    <div className={s.description} dangerouslySetInnerHTML={{__html: el.content}}/>
                </div>
            </div>
        </NavLink>
    ));


    if (isFetching) return <Preloader/>

    return (
        <>
            <div className={s.main_news_block}>
                <div className={s.block_news}>
                    {MapingNews}
                </div>
            </div>
            {/*ARROW*/}
            <ArrowScroll />
        </>
    )
}

export default AuthRedirect(News);