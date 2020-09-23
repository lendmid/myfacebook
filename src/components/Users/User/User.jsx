import React from 'react';
import s from './User.module.css';
import {Link} from "react-router-dom";

const User = React.memo(({userId, name, status, photo}) => {
    return (
        <li className={s.item}>
            {userId ?
                <Link to={`/profile/${userId}`}>
                <div className={s.user}>
                    <img src={photo} className={s.photo} alt="users avatar"></img>
                    <div className={s.name}>{name}</div>
                    <div className={s.status}>{`${status}`}</div>
                </div>
            </Link>
                :
                <div className={s.user}>
                <div className={s.empty_photo} alt="empty user photo"></div>
                <div className={s.empty_name}></div>
            </div>
            }
        </li>
    )
})

export default User;
