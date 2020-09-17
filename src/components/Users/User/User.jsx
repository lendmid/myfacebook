import React from 'react';
import s from './User.module.css';
import {Link} from "react-router-dom";


const User = React.memo(({userId, name, status}) => {
    return (
        <li className={s.item}>
            <Link to={`/profile/${userId}`}>
                <div className={s.user}>
                        <div className={s.name}>{name}</div>
                        <div className={s.status}>{`${status}`}</div>
                </div>
            </Link>
        </li>
    )
})

export default User;
