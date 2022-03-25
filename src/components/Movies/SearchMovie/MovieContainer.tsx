import React, {useCallback} from "react";
import {Movie} from "../Movie";
import {useDispatch, useSelector} from "react-redux";
import {
    InitialMovieStateType,
    setActivePageMovieAC,
    setDisabledButtonMovieAC,
    setMovieToggleFetchingAC, setTotalCountMoviePagesAC
} from "../../../redax/Movie-reducer";
import {AppStateType} from "../../../redax/redux-store";

export const MovieContainer = React.memo(() => {

    const dispatch = useDispatch();
    const stateMovie = useSelector<AppStateType, InitialMovieStateType>(state => state.MovieReducer)

    const setActivePage = useCallback((page: number) => dispatch(setActivePageMovieAC(page)), [dispatch]);
    const setTotalCountPages = useCallback((totalCount: number) => dispatch(setTotalCountMoviePagesAC(totalCount)), [dispatch]);
    const showPreloader = useCallback((isFetching: boolean) => dispatch(setMovieToggleFetchingAC(isFetching)), [dispatch]);
    const disabledAxiosFunc = useCallback((isDisabled: boolean, userId: number) => dispatch(setDisabledButtonMovieAC(isDisabled, userId)), [dispatch]);


    let calculationPage = Math.ceil(stateMovie.totalUsersCountPage / stateMovie.sizeUsersPage);
    let pages = [];
    for (let i = 1; i <= calculationPage; i++) {
        pages.push(i)
    }

    return (
        <Movie
            activePage={stateMovie.activePage}
            pages={pages}
            onClickHandler={setActivePage}
        />
    )
})