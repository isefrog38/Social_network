import {
    deleteBookmarksTrackAC,
    MusicInitialStateType, MusicReducer,
    setAllResultSearchAC,
    setBookmarksTrackAC,
    setShowInfoArtistAC
} from "../Reducers-Store/Music-reduser";
import {ResultsMusicType} from "../Type/API-types/MusicTypes";

let startState: MusicInitialStateType;
let track: ResultsMusicType;

beforeEach(() => {

    track = {
        "wrapperType": "track",
        "kind": "song",
        "artistId": 1352449404,
        "collectionId": 1440925178,
        "trackId": 1440925418,
        "artistName": "JAY-Z",
        "collectionName": "Magna Carta... Holy Grail",
        "trackName": "Holy Grail (feat. Justin Timberlake)",
        "collectionCensoredName": "Magna Carta... Holy Grail",
        "trackCensoredName": "Holy Grail (feat. Justin Timberlake)",
        "artistViewUrl": "https://music.apple.com/us/artist/jay-z/1352449404?uo=4",
        "collectionViewUrl": "https://music.apple.com/us/album/holy-grail-feat-justin-timberlake/1440925178?i=1440925418&uo=4",
        "trackViewUrl": "https://music.apple.com/us/album/holy-grail-feat-justin-timberlake/1440925178?i=1440925418&uo=4",
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/79/e1/47/79e147ed-c29f-44b4-2167-84c7cf1ded8f/mzaf_11613356461472014486.plus.aac.p.m4a",
        "artworkUrl30": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/d6/f7/b0/d6f7b076-668e-a47a-8699-c31ea070a274/source/30x30bb.jpg",
        "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/d6/f7/b0/d6f7b076-668e-a47a-8699-c31ea070a274/source/60x60bb.jpg",
        "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/d6/f7/b0/d6f7b076-668e-a47a-8699-c31ea070a274/source/100x100bb.jpg",
        "collectionPrice": 13.99,
        "trackPrice": 1.29,
        "releaseDate": "2013-07-04T12:00:00Z",
        "collectionExplicitness": "explicit",
        "trackExplicitness": "explicit",
        "discCount": 1,
        "discNumber": 1,
        "trackCount": 16,
        "trackNumber": 1,
        "trackTimeMillis": 338370,
        "country": "USA",
        "currency": "USD",
        "primaryGenreName": "Hip-Hop/Rap",
        "isStreamable": true
    };

    startState = {
        resultCount: null,
        results: [],
        showInfo: null,
        bookmark: [1440925418,],
    };
});

test("push all data Array in State", () => {

    const action = setAllResultSearchAC({resultCount: 50, results: [track]});

    const endState = MusicReducer(startState, action);

    expect(endState.results.length).not.toBe(0);
    expect(endState.results[0].trackId).toBe(track.trackId);

});

test("Show artist info", () => {

    const action = setShowInfoArtistAC(track);

    const endState = MusicReducer(startState, action);

    expect(endState.showInfo?.trackId).toBe(track.trackId);
    expect(endState.showInfo?.artistName).toBe(track.artistName);

});

test("Save Track in bookmarks", () => {

    const action = setBookmarksTrackAC(1234);

    const endState = MusicReducer(startState, action);

    expect(endState.bookmark.length).toBe(2);
    expect(endState.bookmark[0]).toBe(track.trackId);
    expect(endState.bookmark[1]).toBe(1234);

});

test("Delete Track on bookmarks", () => {

    const action = deleteBookmarksTrackAC(track.trackId);

    const endState = MusicReducer(startState, action);

    expect(endState.bookmark.length).toBe(0);

});