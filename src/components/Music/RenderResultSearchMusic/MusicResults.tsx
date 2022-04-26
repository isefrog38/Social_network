import React, {useState} from 'react';
import s from "./MusicOneSong.module.css";
import {ResultsMusicType} from "../../../Type/API-types/MusicTypes";
import {time} from "../../../Utils/Functions";
import {DescriptionTrack} from "../DescriptionTrack/DescriptionTrack";
import {useDispatch} from "react-redux";
import {setShowInfoArtistAC} from "../../../redax/Music-reduser";

type MusicResultsType = {
    state: ResultsMusicType[]
    trackInfo: ResultsMusicType | null | undefined
}

export const MusicResults = ({state, trackInfo}: MusicResultsType) => {

    const [visible, setVisible] = useState<boolean>(false);
    const [active, setActive] = useState<number | null>(null);
    const dispatch = useDispatch();

    const openDescription = (track: ResultsMusicType) => {
        dispatch(setShowInfoArtistAC(track));
        setActive(track.trackId);
        if (track) {
            setVisible(true);
        }
    }

    const close = () => {
        dispatch(setShowInfoArtistAC(null));
        setVisible(false);
        setActive(null);
    }

    return (
        <div className={s.main_page_class}>
            <div className={s.background}/>
            <section>
                {trackInfo && visible && <DescriptionTrack oneSong={trackInfo}
                                                           close={close}
                />}
                <div className={s.album_tracks}>
                    <ol>
                        {state.map(el => <Element key={el.trackId}
                                                  active={active}
                                                  track={el}
                                                  setCurrentId={openDescription}
                        />)}
                    </ol>
                </div>
            </section>
        </div>
    );
};


type PropsTypeElement = {
    track: ResultsMusicType
    active: number | null
    setCurrentId: (track: ResultsMusicType) => void
}

const Element = ({track, active, setCurrentId}: PropsTypeElement) => {

    let activeId = track.trackId;

    const click = () => {
        setCurrentId(track);
    }

    return (
        <li onClick={click} className={activeId === active ? s.active_li : ''}>
            <span><img className={s.image} src={track.artworkUrl100} alt={track.trackName}/></span>
            <span>{track.artistName} ({track.trackName})</span>
            <span>{time(Number(track.trackTimeMillis))}</span>
        </li>
    )
}