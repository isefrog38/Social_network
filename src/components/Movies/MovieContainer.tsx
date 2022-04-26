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
import {AppStateType} from "../../redax/store";
import {MoviesAPI} from "../../Api/Api";
import {AuthRedirect} from "../../HOC/AuthRedirect";

const MovieContainer = () => {

    const dispatch = useDispatch();
    const stateMovie = useSelector<AppStateType, InitialMovieStateType>(state => state.MovieReducer);

    const setActivePage = useCallback((page: number) => dispatch(setActivePageMovieAC(page)), [dispatch]);
    const setTotalCountPages = useCallback((totalCount: number) => dispatch(setTotalCountMoviePagesAC(totalCount)), [dispatch]);
    const setPreloader = useCallback((isFetching: boolean) => dispatch(setMovieToggleFetchingAC(isFetching)), [dispatch]);
    const setSearchResult = useCallback((searchResult: Array<MovieResponseType>) => {
        setSearchError('')
        dispatch(setSearchResultAC(searchResult))
    }, [dispatch]);
    const setSearchError = useCallback((error: string) => dispatch(setSearchErrorAC(error)), [dispatch]);
    const setSearchErrorByType = useCallback((errorByType: string) => dispatch(setSearchErrorByTypeAC(errorByType)), [dispatch]);
    const setSearchResultByType = useCallback((searchResultByType: Array<MovieResponseType>) => {
        setSearchErrorByType('')
        dispatch(setSearchResultByTypeAC(searchResultByType))
    }, [dispatch]);
    const setSearchTitle = useCallback((title: string) => dispatch(setSearchTitleAC(title)), [dispatch]);
    /*const selectType = useCallback((selectType: SelectTypeMovieType) => dispatch(selectTypeAC(selectType)), [dispatch]);*/

    const searchFilm = async (searchTitle: string) => {
        setSearchTitle(searchTitle);
        setPreloader(true)
        try {
            const {data} = await MoviesAPI.searchFilmsByTitle(searchTitle);
            const {Search, Error, Response} = data;
            Response === 'True' ? setSearchResult(Search) : setSearchError(Error);
            setTotalCountPages(data.totalResults)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        setPreloader(false)
    };
    const searchByType = async (searchTitle: string) => {
        setSearchTitle(searchTitle);
        setPreloader(true)
        try {
            const {data} = await MoviesAPI.searchFilmsByType(searchTitle, stateMovie.type);
            const {Search, Error, Response} = data;
            Response === 'True' ? setSearchResultByType(Search) : setSearchErrorByType(Error);
            setTotalCountPages(data.totalResults);
        } catch (error) {
            console.log(error)
        }
        setPreloader(false)
    };
    const onClickHandlerPage = async (page: number) => {
        setActivePage(page)
        setPreloader(true)
        try {
            const {data} = await MoviesAPI.onPageMoviesChanged(stateMovie.searchTitle, page);
            const {Search, Error, Response} = data;
            Response === 'True' ? setSearchResult(Search) : setSearchError(Error);
        } catch (error) {
            console.warn(error)
        }
        setPreloader(false)
    };

    let calculationPage = Math.ceil(stateMovie.totalUsersCountPage / stateMovie.sizeUsersPage);
    let pages = [];
    for (let i = 1; i <= calculationPage; i++) {
        pages.push(i)
    }

    return <Movie
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
}

export default AuthRedirect(MovieContainer);