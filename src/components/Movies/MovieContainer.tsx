import React, {useCallback} from "react";
import {Movie} from "./Movie";
import {useDispatch, useSelector} from "react-redux";
import {
    InitialMovieStateType,
    MovieResponseType,
    setActivePageMovieAC,
    setMovieToggleFetchingAC, setSearchErrorAC, setSearchErrorByTypeAC,
    setSearchResultAC, setSearchResultByTypeAC, setSearchTitleAC,
    setTotalCountMoviePagesAC
} from "../../redax/Movie-reducer";
import {AppStateType} from "../../redax/redux-store";
import {onPageMoviesChanged, searchFilmsByTitle, searchFilmsByType} from "../../Api/Api";

export const MovieContainer = () => {

    const dispatch = useDispatch();
    const stateMovie = useSelector<AppStateType, InitialMovieStateType>(state => state.MovieReducer)

    const setActivePage = useCallback((page: number) => dispatch(setActivePageMovieAC(page)), [dispatch]);
    const setTotalCountPages = useCallback((totalCount: number) => dispatch(setTotalCountMoviePagesAC(totalCount)), [dispatch]);
    const setPreloader = useCallback((isFetching: boolean) => dispatch(setMovieToggleFetchingAC(isFetching)), [dispatch]);
    const setSearchResult = useCallback((searchResult: Array<MovieResponseType>) => dispatch(setSearchResultAC(searchResult)), [dispatch]);
    const setSearchError = useCallback((error: string) => dispatch(setSearchErrorAC(error)), [dispatch]);
    const setSearchErrorByType = useCallback((errorByType: string) => dispatch(setSearchErrorByTypeAC(errorByType)), [dispatch]);
    const setSearchResultByType = useCallback((searchResultByType: Array<MovieResponseType>) => dispatch(setSearchResultByTypeAC(searchResultByType)), [dispatch]);
    const setSearchTitle = useCallback((title: string) => dispatch(setSearchTitleAC(title)), [dispatch]);

    const searchFilm = async (searchTitle: string) => {
        setSearchTitle(searchTitle);
        setPreloader(true)
        try {
            const {data} = await searchFilmsByTitle(searchTitle);
            const {Search, Error, Response} = data;
            Response === 'True' ? setSearchResult(Search) : setSearchError(Error);
            setTotalCountPages(data.totalResults) //set total pages

            console.log(data)

        } catch (error) {
            console.log(error)
        }
        setPreloader(false)
    };

    const searchByType = async (titleSearch: string) => {
        const type: string = titleSearch ? titleSearch : '';
        setSearchTitle(titleSearch);
        setPreloader(true)
        try {
            const {data} = await searchFilmsByType(titleSearch, type);
            const {Search, Error, Response} = data;
            Response === 'True' ? setSearchResultByType(Search) : setSearchErrorByType(Error);
            setTotalCountPages(data.totalResults) //set total pages

            console.log(data)

        } catch (error) {
            console.log(error)
        }
        setPreloader(false)
    };

    const onClickHandlerPage = async (page: number) => {
        setActivePage(page)
        setPreloader(true)
        try {
            const {data} = await onPageMoviesChanged(stateMovie.searchTitle, page);
            const {Search, Error, Response} = data;
            Response === 'True' ? setSearchResult(Search) : setSearchError(Error);
            setTotalCountPages(data.totalResults) //set total pages

            console.log(data)

        } catch (error) {
            console.warn(error)
        }
        setPreloader(false)
    }

    let calculationPage = Math.ceil(stateMovie.totalUsersCountPage / stateMovie.sizeUsersPage);
    let pages = [];
    for (let i = 1; i <= calculationPage; i++) {
        pages.push(i)
    }

    return (
        <Movie
            searchResultByType={stateMovie.searchResultByType}
            searchErrorByType={stateMovie.searchErrorByType}
            searchFilm={searchFilm}
            searchByType={searchByType}
            searchResult={stateMovie.searchResult}
            searchError={stateMovie.searchError}
            activePage={stateMovie.activePage}
            pages={pages}
            preloader={stateMovie.preloader}
            onClickHandler={onClickHandlerPage}
        />
    )
}