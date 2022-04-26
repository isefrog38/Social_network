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
    const dispatch = useDispatch();

    const openDescription = (track: ResultsMusicType) => {
        close();
        dispatch(setShowInfoArtistAC(track));
        if (track) {
            setVisible(true);
        }
    }

    const close = () => {
        dispatch(setShowInfoArtistAC(null));
        setVisible(false);
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
    setCurrentId: (track: ResultsMusicType) => void
}

const Element = (props: PropsTypeElement) => {

    const click = () => {
        props.setCurrentId(props.track);
    }

    return (
        <li onClick={click}>
            <span><img className={s.image} src={props.track.artworkUrl100} alt={props.track.trackName}/></span>
            <span>{props.track.artistName} ({props.track.trackName})</span>
            <span>{time(Number(props.track.trackTimeMillis))}</span>
        </li>
    )
}