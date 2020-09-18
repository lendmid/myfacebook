import React from 'react';
import s from './User.module.css';
import {Link} from "react-router-dom";
import users_avatar from "../../../assets/images/user_avatar.png"

const User = React.memo(({userId, name, status, photo}) => {
    return (
        <li className={s.item}>
            <Link to={`/profile/${userId}`}>
                <div className={s.user}>
                        <img src={photo ? photo : users_avatar} className={s.photo}></img>
                        <div className={s.name}>{name}</div>
                        <div className={s.status}>{`${status}`}</div>
                </div>
            </Link>
        </li>
    )
})

export default User;
