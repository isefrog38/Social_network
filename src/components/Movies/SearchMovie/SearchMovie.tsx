import React, {ChangeEvent, FC, useState} from 'react';
import s from './SearchMovie.module.css';
import {SearchPanel} from "../../SearchPanel/SearchPanel";

type SearchMovieType = {
    searchError: string
    searchErrorByType: string
    searchFilm: (searchTitle: string) => void
    searchByType: (titleSearch: string) => void
}

export const SearchMovie: FC<SearchMovieType> = ({searchError, searchByType, searchFilm}) => {

    const [searchName, setSearchName] = useState<string>('');
    const [valueSearchByType, setValueSearchByType] = useState<string>('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.currentTarget.value)
    };
    const onChangeHandlerByType = (e: ChangeEvent<HTMLInputElement>) => {
        setValueSearchByType(e.currentTarget.value)
    };
    const onClickHandler = () => {
        if (searchName.trim() !== "") {
            searchFilm(searchName.trim())
            setSearchName("")
        }
    };
    const onClickHandlerByType = () => {
        if (valueSearchByType.trim() !== "") {
            searchByType(valueSearchByType.trim())
            setValueSearchByType("")
        }
    };


    return (
        <div>
            <h1>Search your movie</h1>
            <div className={s.main_search}>
                <div className={s.main_search_block}>
                    <SearchPanel
                        type="text"
                        value={searchName}
                        onChange={onChangeHandler}
                        onClickHandler={onClickHandler}
                        placeholderTitle={'Search by name'}
                    />
                </div>
                <div className={s.error_message_search}> {searchError} </div>
                <button onClick={onClickHandler} className={s.buttons}>Search</button>
            </div>

            <div className={s.main_search}>
                <div className={s.main_search_block}>
                    <SearchPanel
                        type="text"
                        value={valueSearchByType}
                        onChange={onChangeHandlerByType}
                        onClickHandler={onClickHandlerByType}
                        placeholderTitle={'Search by type'}
                    />
                </div>
                <div className={s.error_message_search}> {searchError} </div>
                <div className={s.buttons_block}>
                    <button onClick={onClickHandler} datatype={'movie'} className={s.buttons}>Movie</button>
                    <button onClick={onClickHandler} datatype={'series'} className={s.buttons}>Series</button>
                    <button onClick={onClickHandler} datatype={'season'} className={s.buttons}>Season</button>
                </div>
            </div>
        </div>
    );
}


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