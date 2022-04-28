import React from 'react';
import {useParams, Navigate, NavLink} from "react-router-dom";
import s from "./OneNews.module.css";
import {NewsResponseType} from "../../../Reducers-Store/News-reducer";
import {ArrowBackOrNext} from "../../SmallComponents/ArrowBack/ArrowBackOrNext";

type OneNewsProps = {
    nextPath: string
    stateNews: NewsResponseType[]
}

export const OneNews = ({stateNews, nextPath}: OneNewsProps) => {

    let {newsId} = useParams();

    const resultFilter = stateNews.filter(news => newsId === news.id);
    console.log(resultFilter)


    if (!newsId) return (<Navigate to={'/news'}/>)

    return (
        <div className={s.main_one_news_block}>
            <div className={s.small_block_news} key={resultFilter[0].id}>
                <div className={s.block_title_and_description}>
                    <div className={s.title_block}>
                        <div className={s.title}>{resultFilter[0].title}</div>
                    </div>
                    <div className={s.description} dangerouslySetInnerHTML={{__html: resultFilter[0].content}}/>
                </div>
                <div className={s.date_block}>
                    <div className={s.date}>{resultFilter[0].data}</div>
                </div>
            </div>

            {/* Back */}
            <NavLink to={"/news"} className={s.main_arrow_block}>
                <div className={s.arrow_back}>
                    <div className={s.arrow_container}>
                        <div className={s.arrow}/>
                        <div className={s.arrow}/>
                        <div className={s.arrow}/>
                    </div>
                </div>
                <div className={s.name_arrow}>{"Back"}</div>
            </NavLink>
            {/* Next */}
            <div className={s.arrow_next}>
                <ArrowBackOrNext path={nextPath} nameArrow={"Next"}/>
            </div>

        </div>
    );
};