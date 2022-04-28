import React from "react";
import './../Dialogs.module.css'
import s from "./Message.module.css";
import {MessageType} from "../../../Reducers-Store/Dialogs-reducer";

const Messages = ({message, id}: MessageType) => {
    return (
        <>
            <div className={s.message}>
                <img className={s.avatar} src="https://iconape.com/wp-content/png_logo_vector/avatar.png" alt="avatar"/>

                <div className={s.angle}/>
                <div className={s.content}>
                    <div className={s.name}>Some Name First</div>
                    <div className={s.text}>{message}</div>
                    <div className={s.time}>{"22:15"}pm</div>
                </div>
            </div>
            <div className={s.message_2}>
                <img className={s.avatar_2} src="https://iconape.com/wp-content/png_logo_vector/avatar.png" alt="avatar"/>

                <div className={s.angle_2}/>
                <div className={s.content_2}>
                    <div className={s.name_2}>Some Name Last</div>
                    <div className={s.text_2}>{message}</div>
                    <div className={s.time_2}>{"22:15"}pm</div>
                </div>
            </div>
        </>
    )
}

export default Messages