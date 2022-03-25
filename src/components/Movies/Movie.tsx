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
    onClickHandler: (page: number) => void
}

export const Movie: FC<MovieType> = ({onClickHandler, activePage, pages}) => {

    const [searchResult, setSearchResult] = useState<Array<MovieResponceType>>([]);
    const [preloader, setPreloader] = useState<boolean>(false);


    let PagesBlock = pages.map(page => <Pages
        key={page}
        onClickHandler={onClickHandler}
        activePage={activePage}
        page={page}
    />);

    return (
        <div className={s.main_search_block}>
            <div className={s.search_block}>
                <SearchMovie setSearchResult={setSearchResult} setPreloader={setPreloader}/>
            </div>
            <div className={s.results_show_films}>
                {preloader
                        ? <Preloader2/>
                        : <>
                            {PagesBlock}
                            <ResultSearchMovie searchResult={searchResult} />
                            {PagesBlock}
                          </>
                }
            </div>
        </div>
    )
};