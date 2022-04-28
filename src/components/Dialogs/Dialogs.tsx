import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {AllMessagesContainer} from "./AllMessagesContainer";
import {DialogType} from "../../Reducers-Store/Dialogs-reducer";

type DialogsType = {
   dialogs: DialogType[]
}

const Dialogs = ({dialogs}: DialogsType) => {

    return (
        <div>
            <div className={s.dialogs}>
                <div>
                    <div className={s.dialogsItems}>
                        {dialogs.map((d) =>
                            <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>
                        )}
                    </div>
                </div>
                <AllMessagesContainer/>
            </div>
        </div>
    )
}

export default Dialogs