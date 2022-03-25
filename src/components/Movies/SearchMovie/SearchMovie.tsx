import React, {FC, useState} from 'react';
import s from './SearchMovie.module.css';
import {MovieResponceType, searchFilmsByTitle} from "../../../Api/Api";
import {SearchPanel} from "../../SearchPanel/SearchPanel";

type SearchMovieType = {
    setSearchResult: (result: Array<MovieResponceType>) => void
    setPreloader: (show: boolean) => void
}

export const SearchMovie: FC<SearchMovieType> = ({setSearchResult, setPreloader}) => {
    const [searchName, setSearchName] = useState('');
    const [searchError, setSearchError] = useState('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [searchResultByType, setSearchResultByType] = useState('');

    /*const searchFilm = () => {
        searchFilmsByTitle(searchName)
            .then( ({data}) => {
                const { Search, Error, Response } = data
                Response === 'True' ? setSerachResult(JSON.stringify(Search)) : setSerachResult(Error)
            })
            .catch((error) => {
                console.warn(error)
            })
    };*/

    const searchFilm = async () => {
        setPreloader(true)
        try {
            const {data} = await searchFilmsByTitle(searchName);
            const {Search, Error, Response} = data;
            Response === 'True' ? setSearchResult(Search) : setSearchError(Error);
        } catch (error) {
            console.warn(error)
        }
        setPreloader(false)
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        /*API.searchFilmsByType(searchNameByType, type)*/
    };

    return (
        <div>
            <h1>Search your movie</h1>
            <div className={s.main_search}>
                <div className={s.main_search_block}>
                    <SearchPanel
                        type="text"
                        value={searchName}
                        onChange={(e) => setSearchName(e.currentTarget.value)}
                        placeholderTitle={'Search by name'}
                    />
                </div>
                <div className={s.error_message_search}> {searchError} </div>
                <button onClick={searchFilm} className={s.buttons}>Search</button>
            </div>

            <div className={s.main_search}>
                <div className={s.main_search_block}>
                    <SearchPanel
                        type="text"
                        value={searchNameByType}
                        onChange={(e) => setSearchNameByType(e.currentTarget.value)}
                        placeholderTitle={'Search by type'}
                    />
                </div>
                <div className={s.error_message_search}> {searchResultByType} </div>
                <div className={s.buttons_block}>
                    <button onClick={searchByType} data-t='movie' className={s.buttons}>Movie</button>
                    <button onClick={searchByType} data-t='series' className={s.buttons}>Series</button>
                </div>
            </div>
        </div>
    )
        ;
}