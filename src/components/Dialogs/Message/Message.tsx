import React from "react";
import s from './../Dialogs.module.css'

const Messages = ({messages}: any) => {
    return (
        <div className={s.message}>{messages}</div>
    )
}

export default Messages