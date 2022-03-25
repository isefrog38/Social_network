import React, {useCallback} from "react";
import {Movie} from "./Movie";
import {useDispatch, useSelector} from "react-redux";
import {
    InitialMovieStateType,
    setActivePageMovieAC,
    setMovieToggleFetchingAC, setTotalCountMoviePagesAC
} from "../../redax/Movie-reducer";
import {AppStateType} from "../../redax/redux-store";

export const MovieContainer = () => {

    const dispatch = useDispatch();
    const stateMovie = useSelector<AppStateType, InitialMovieStateType>(state => state.MovieReducer)

    const setActivePage = useCallback((page: number) => dispatch(setActivePageMovieAC(page)), [dispatch]);
    const setTotalCountPages = useCallback((totalCount: number) => dispatch(setTotalCountMoviePagesAC(totalCount)), [dispatch]);
    const setPreloader = useCallback((isFetching: boolean) => dispatch(setMovieToggleFetchingAC(isFetching)), [dispatch]);


    let calculationPage = Math.ceil(stateMovie.totalUsersCountPage / stateMovie.sizeUsersPage);
    let pages = [];
    for (let i = 1; i <= calculationPage; i++) {
        pages.push(i)
    }

    return (
        <Movie
            activePage={stateMovie.activePage}
            pages={pages}
            preloader={stateMovie.preloader}
            onClickHandler={setActivePage}
            setTotalCountPages={setTotalCountPages}
            setPreloader={setPreloader}
        />
    )
}