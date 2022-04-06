import React from 'react';
import s from "./Best-friends.module.css";
import SideBar from "../SideBar/SideBar";
import {SideBarType} from "../../../redax/SideBar-reducer";


type BestFriendsType = {
    sideBar: SideBarType[]
}

const BestFriends = ({sideBar}: BestFriendsType) => {

    const SideBarElement = sideBar.map(d => <SideBar key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>);

    return (
        <div className={s.sideBar}>
            <h4>Best Friends</h4>
            <div className={s.blockSideImg}>
                {SideBarElement}                 {/*SIDEBAR EL*/}
            </div>
        </div>
    );
};


export default BestFriends;

