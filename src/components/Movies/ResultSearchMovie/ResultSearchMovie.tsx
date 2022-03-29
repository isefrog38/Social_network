import React, {FC, memo} from 'react';
import s from './ResultSearchMovie.module.css';
import altarnativePoster from '../../../Assets/mini img/NoPoster.jpg';
import {Pages} from "../../Pagination/Pages";
import {MovieResponseType} from "../../../redax/Movie-reducer";

type SearchResultType = {
    searchResult: Array<MovieResponseType>
    searchResultByType: Array<MovieResponseType>
    pages: number[]
    activePage: number
    onClickHandler: (page: number) => void
}

export const ResultSearchMovie: FC<SearchResultType> = memo(({searchResult, pages, activePage, onClickHandler, searchResultByType}) => {

    /*useEffect(() => {

        let func = () => {
            return <>
                <div className={s.type}>TYPE FILM</div>
                <div className={s.year}>1995th year</div>
            </>
        };

        window.addEventListener('mouseout', func);

        return () => {
            window.removeEventListener('mouseout', func)
        }
    })*/



    let PagesBlock = pages.map(page => <Pages
        key={page}
        onClickHandler={onClickHandler}
        activePage={activePage}
        page={page}
    />);

    const resultsSearch = searchResult.map(el => {
        return (
            <div className={s.block_one_film} key={el.imdbID}>
                <img
                    className={s.image}
                    id={el.imdbID}
                    src={el.Poster !== "N/A" ? el.Poster : altarnativePoster}
                    alt={el.Title}
                />
                <div className={s.title}>{el.Title}</div>
                <div className={s.type}>{el.Type}</div>
                <div className={s.year}>{el.Year}th year</div>
            </div>
        )
    });

    const resultsSearchByType = searchResultByType.map(el => {
        return (
            <div className={s.block_one_film} key={el.imdbID}>
                <img
                    className={s.image}
                    id={el.imdbID}
                    src={el.Poster !== "N/A" ? el.Poster : altarnativePoster}
                    alt={el.Title}
                />
                <div className={s.title}>{el.Title}</div>
                <div className={s.type}>{el.Type}</div>
                <div className={s.year}>{el.Year}th year</div>
            </div>
        )
    });

    return (
        <>
            {resultsSearchByType.length === 0 && resultsSearch.length === 0
                ? <div className={s.warning}>
                    <div className={s.warning_small_block}>
                        <div>{`Please select a movie by title or type!`}</div>
                        <div>{`(Only English Language)`}</div>
                    </div>
                </div>
                :
                    <div className={s.results_show_films}>
                    <div className={s.main_block_result_search}>
                        <div className={s.block_result_search}>
                            <div className={s.results}>
                                <div className={s.pages_block} style={{margin: "0 0 20px 0"}}> {PagesBlock} </div>
                                {resultsSearch}
                                {resultsSearchByType}
                                <div className={s.pages_block} style={{margin: "-5px 0 0 0"}}> {PagesBlock} </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
});