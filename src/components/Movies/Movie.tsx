import React, {FC, useState} from "react";
import s from './Movie.module.css'
import {SearchMovie} from "./SearchMovie/SearchMovie";
import {ResultSearchMovie} from "./ResultSearchMovie/ResultSearchMovie";
import {MovieResponceType} from "../../Api/Api";
import {Preloader2} from "../Preloader/Preloader2/Preloader2";
import {Pages} from "../Pages/Pages";

type MovieType = {
    pages: number[]
    activePage: number
    preloader: boolean
    onClickHandler: (page: number) => void
    setTotalCountPages: (totalCount: number) => void
    setPreloader: (isFetching: boolean) => void
}

export const Movie: FC<MovieType> = ({onClickHandler, activePage, preloader, pages, setTotalCountPages, setPreloader}) => {

    const [searchResult, setSearchResult] = useState<Array<MovieResponceType>>([]);


    let PagesBlock = pages.map(page => <Pages
        key={page}
        onClickHandler={onClickHandler}
        activePage={activePage}
        page={page}
    />);

    return (
        <div className={s.main_search_block}>
            <div className={s.search_block}>
                <SearchMovie setSearchResult={setSearchResult} setPreloader={setPreloader} setTotalCountPages={setTotalCountPages}/>
            </div>
            <div className={s.results_show_films}>
                {preloader
                        ? <Preloader2/>
                        : <>
                            <div className={s.pages_block}> { PagesBlock } </div>
                            <ResultSearchMovie searchResult={searchResult} />
                            <div className={s.pages_block}> { PagesBlock } </div>
                          </>
                }
            </div>
        </div>
    )
};