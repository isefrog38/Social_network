import React, {FC} from 'react';
import s from './ResultSearchMovie.module.css';
import {MovieResponceType} from "../../../Api/Api";
import altarnativePoster from '../../../mini img/NoPoster.jpg';

type SearchResultType = {
    searchResult: Array<MovieResponceType>
}

export const ResultSearchMovie: FC<SearchResultType> = ({searchResult}) => {

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

    const resultsSearch = searchResult.map(el => {
        return (
            <div className={s.block_one_film}>
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
        <div className={s.main_block_result_search}>
            <div className={s.block_result_search}>
                <div className={s.results}>
                    {resultsSearch.length === 0
                        ? <div className={s.warning}>{
                            <>
                                <div>{`Please select a movie by title or type!`}</div>
                                <div>{`(Only English Language)`}</div>
                            </>
                        }</div>
                        : resultsSearch}
                </div>
            </div>
        </div>
    );
};