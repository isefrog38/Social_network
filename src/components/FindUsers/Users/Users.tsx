import React from 'react';
import {UsersPropsType} from "../UsersContainer";
import s from "./Users.module.css";
import axios from "axios";

export const Users = (props: UsersPropsType) => {
    let defaultAvatar = "https://as2.ftcdn.net/v2/jpg/03/08/68/53/1000_F_308685322_QENNJlJFHONQ8FVP2xVsiez6x1almqo2.jpg";

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
                props.setUsers(response.data.items)
            });
        }
    }

    return (
        <>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div key={u.id} className={s.mainDiv}>
                    <span>
                        <div>
                            <img className={s.image}
                                 src={ u.photos.small !== null ? u.photos.small : defaultAvatar }
                                 alt={"ImgPerson"}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button className={s.button}
                                    onClick={() => {
                                    props.unfollow(u.id)
                                }}>UnFollow</button>
                                : <button className={s.button}
                                    onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <h3>{u.name}</h3>
                            <div>{u.status}</div>
                        </span>

                    </span>
                </div>)
            }
        </>
    );
};

