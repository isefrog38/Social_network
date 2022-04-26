import React, {ReactEventHandler, useState} from 'react';
import s from "../RenderResultSearchMusic/MusicOneSong.module.css";
import {ResultsMusicType} from "../../../Type/API-types/MusicTypes";
import {Bookmark} from "../../../Assets/CreateSVG/Bookmark";

type DescriptionTrackType = {
    oneSong: ResultsMusicType
    close: () => void
}

export const DescriptionTrack = ({oneSong, close}: DescriptionTrackType) => {

    const [play, setPlay] = useState<boolean>(false);

    const onClick = () => {
        setPlay(!play);
    }

    return (
        <div className={s.album_info}>
            <div className={s.close} onClick={close}>X</div>
            <div className={s.album_art}><img
                src={oneSong.artworkUrl100}
                alt={oneSong.trackName}/>
                <div className={s.actions}>
                    <button className={s.play} onClick={onClick}>{!play ? "Play" : "Pause"}</button>
                    <Bookmark trackId={oneSong.trackId}/>
                </div>
            </div>
            <div className={s.album_details}>
                <h1>{oneSong.trackName}</h1>
                <span>
                            <span>{oneSong.primaryGenreName}</span>
                            <p>
                                <span>&copy; 2016 Atlantic Recording Corporation</span>
                            </p>
                    <a className={s.link} href={oneSong.artistViewUrl}>Album Link</a>
                        </span>
                <p>Unleashed is the tenth album by American Christian rock band Skillet, released on
                    August 5,
                    2016. The
                    album was announced on May 20, 2016, and a lyric video was released for the track
                    "Feel
                    Invincible" at
                    the same time on the band's YouTube channel. Six days later, the band released a
                    lyric video
                    for the
                    track "Stars" on their YouTube channel.</p>
                <p>
                    <audio key={oneSong.trackId} controls className={s.audio_block}>
                        <source src={oneSong.previewUrl} type="audio/mpeg"/>
                    </audio>
                </p>
            </div>
        </div>
    );
};

