import React from 'react';
import s from "./Users.module.css";
import axios from "axios";
import {UserType} from "../../../redax/Users-reducer";

type UsersClassPropsType = {
    unfollow: (id: number) => void
    follow: (id: number) => void
    users: UserType[]
    setUsers: ( users: UserType[] ) => void
}

export class UsersClass extends React.Component<UsersClassPropsType> {

    defaultAvatar = "https://as2.ftcdn.net/v2/jpg/03/08/68/53/1000_F_308685322_QENNJlJFHONQ8FVP2xVsiez6x1almqo2.jpg";

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then( response => {
                this.props.setUsers(response.data.items)
        });
    }

    render () {
        return <div>
            {
                this.props.users.map(u => <div key={u.id} className={s.mainDiv}>
                    <span>
                        <div>
                            <img className={s.image}
                                 src={ u.photos.small !== null ? u.photos.small : this.defaultAvatar }
                                 alt={"ImgPerson"}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button className={s.button}
                                          onClick={() => {
                                              this.props.unfollow(u.id)
                                          }}>UnFollow</button>
                                : <button className={s.button}
                                          onClick={() => {
                                              this.props.follow(u.id)
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
        </div>
    }
}
