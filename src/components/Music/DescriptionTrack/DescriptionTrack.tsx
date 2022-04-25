import React, {useState} from 'react';
import s from "../RenderResultSearchMusic/MusicOneSong.module.css";

export const DescriptionTrack = () => {

    const [onSave, setOnSave] = useState<boolean>(false);

    const onClickHandler = () => {
        setOnSave(!onSave);
    }

    return (
        <div className={s.album_info}>
            <div className={s.album_art}><img
                src={"https://cdnn11.img.sputnik.by/img/104118/57/1041185792_0:0:2732:1716_1920x0_80_0_0_a8a2431afdbdc3e2a39d679291fda7ba.jpg"}
                alt="blaba"/>
                <div className={s.actions}>
                    <button className={s.play}>Play</button>
                    <div className={!onSave ? s.bookmark : s.bookmarkSave} onClick={onClickHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#faa800" height="24"
                             viewBox="0 0 24 24"
                             width="24">
                            <path
                                d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={s.album_details}>
                <h1>Unleashed</h1>
                <span>
                            <span>Hard Rock </span>
                            <p>
                                <span>&copy; 2016 Atlantic Recording Corporation</span>
                            </p>
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
            </div>
        </div>
    );
};
