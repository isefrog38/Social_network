import React, {FC} from "react";
import s from './Movie.module.css'
import {SearchMovie} from "./SearchMovie/SearchMovie";
import {ResultSearchMovie} from "./ResultSearchMovie/ResultSearchMovie";
import {Preloader2} from "../Preloader/Preloader2/Preloader2";
import {MovieResponseType} from "../../redax/Movie-reducer";

type MovieType = {
    searchFilm: (searchTitle: string) => void
    searchByType: (searchTitle: string) => void
    searchResultByType: Array<MovieResponseType>
    searchError: string
    pages: number[]
    activePage: number
    searchErrorByType: string
    preloader: boolean
    searchResult: Array<MovieResponseType>
    onClickHandler: (page: number) => void
}

export const Movie: FC<MovieType> = ({
                                         onClickHandler,
                                         activePage,
                                         preloader,
                                         pages,
                                         searchError,
                                         searchResult,
                                         searchResultByType,
                                         searchByType,
                                         searchFilm,
                                         searchErrorByType,
                                     }) => {

    return (
        <>
            {preloader
                ? <Preloader2/>
                : <div className={s.main_search_block}>
                    <div className={s.search_block}>
                        <SearchMovie
                            searchError={searchError}
                            searchByType={searchByType}
                            searchFilm={searchFilm}
                            searchErrorByType={searchErrorByType}
                        />
                    </div>
                    <ResultSearchMovie
                        searchResultByType={searchResultByType}
                        searchResult={searchResult}
                        pages={pages}
                        onClickHandler={onClickHandler}
                        activePage={activePage}
                    />
                </div>
            }
        </>
    )
};