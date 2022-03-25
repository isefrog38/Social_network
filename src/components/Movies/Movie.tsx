import React, {useState} from "react";
import s from './Movie.module.css'
import {SearchMovie} from "./SearchMovie/SearchMovie";
import {ResultSearchMovie} from "./ResultSearchMovie/ResultSearchMovie";
import {MovieResponceType} from "../../Api/Api";
import {Preloader2} from "../Preloader/Preloader2/Preloader2";

export const Movie = () => {

    const [searchResult, setSearchResult] = useState<Array<MovieResponceType>>([]);
    const [preloader, setPreloader] = useState<boolean>(false);

    return (
        <div className={s.main_search_block}>
            <div className={s.search_block}>
                <SearchMovie setSearchResult={setSearchResult} setPreloader={setPreloader}/>
            </div>
            <div className={s.results_show_films}>
                {preloader
                        ? <Preloader2/>
                        : <ResultSearchMovie searchResult={searchResult} />
                }
            </div>
        </div>
    )
};