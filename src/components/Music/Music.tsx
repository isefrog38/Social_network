import React from "react";
import s from './Music.module.css'
import {AuthRedirect} from "../../HOC/AuthRedirect";

const Music = () => {
    return <div>
        Music
    </div>
}

export default AuthRedirect(Music);
