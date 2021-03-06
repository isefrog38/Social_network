import React, {FC, memo} from "react";
import s from './Movie.module.css'
import {SearchMovie} from "./SearchMovie/SearchMovie";
import {ResultSearchMovie} from "./ResultSearchMovie/ResultSearchMovie";
import {Preloader2} from "../SmallComponents/Preloader/Preloader2/Preloader2";
import {MovieResponseType} from "../../Reducers-Store/Movie-reducer";
import {ArrowScroll} from "../SmallComponents/ArrowScroll/ArrowScroll";

type MovieType = {
    searchFilm: (searchTitle: string) => void
    searchByType: (searchTitle: string) => void
    searchResultByType: Array<MovieResponseType>
    searchError: string
    activePage: number
    searchErrorByType: string
    preloader: boolean
    searchResult: Array<MovieResponseType>
    onClickHandler: (page: number) => void
    sizeMoviePage: number
    totalMovieCountPage: number
}

export const Movie: FC<MovieType> = memo(({
                                              onClickHandler,
                                              activePage,
                                              preloader,
                                              searchError,
                                              searchResult,
                                              searchResultByType,
                                              searchByType,
                                              searchFilm,
                                              searchErrorByType,
                                              totalMovieCountPage,
                                              sizeMoviePage,
                                          }) => {

    return (
        <>
            {preloader
                ? <Preloader2/>
                : <div className={s.main_search_block}>
                    <div className={s.flex_block}>
                        <div className={s.search_block}>
                            <SearchMovie
                                searchError={searchError}
                                searchByType={searchByType}
                                searchFilm={searchFilm}
                                searchErrorByType={searchErrorByType}
                            />
                        </div>
                    </div>
                    <ResultSearchMovie
                        totalMovieCountPage={totalMovieCountPage}
                        sizeMoviePage={sizeMoviePage}
                        searchResultByType={searchResultByType}
                        searchResult={searchResult}
                        onClickHandler={onClickHandler}
                        activePage={activePage}
                    />
                    <ArrowScroll />
                </div>
            }
        </>
    )
});