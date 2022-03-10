import React from "react";
import s from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div className={s.main}>
            <div className={s.item}>
                <img className={s.image}
                    src='https://images.unsplash.com/photo-1625721838087-c46e51c89558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                <div className={s.descriptionsBlock}>
                    ava + Descriptions
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;