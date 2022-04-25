import React, {useState} from 'react';
import s from "./MusicOneSong.module.css";
import {ResultsMusicType} from "../../../Type/API-types/MusicTypes";
import {time} from "../../../Utils/Functions";
import {DescriptionTrack} from "../DescriptionTrack/DescriptionTrack";

type MusicResultsType = {
    state: ResultsMusicType[]
}

export const MusicResults = ({state}: MusicResultsType) => {

    const [showInfo, setShowInfo] = useState<boolean>(false);

    return (
        <div className={s.main_page_class}>
            <div className={s.background}/>
            <section>
                {showInfo && <DescriptionTrack />}
                <div className={s.album_tracks}>
                    <ol>
                        {state.map(el => (
                            <li onClick={() => setShowInfo(!showInfo)}>
                                <span>{el.trackName}</span>
                                <span>{el.artistName}</span>
                                <span>{time(Number(el.trackTimeMillis))}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
        </div>

        // return (
        //     <div>
        //         {state.map(el => (
        //             <div key={el.trackId} className={s.main_song_div}>
        //                 <div className={s.photo_song}>
        //                     <img className={s.image} src={el.artworkUrl100} alt={el.artworkUrl60}/>
        //                 </div>
        //                 <div className={s.description}>
        //                     <div>Artist: {el.artistName}</div>
        //                     <div className={s.music_style}>Music Style: {el.primaryGenreName}</div>
        //                     <div>Track Name: {el.trackName}</div>
        //                     <div className={s.album_name}>Album: {el.collectionName}</div>
        //
        //                     <audio controls className={s.audio_player}>
        //                         <source src={el.previewUrl} type="audio/mpeg"/>
        //                     </audio>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
    );
};