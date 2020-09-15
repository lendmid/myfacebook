import React from 'react';
import s from './User.module.css';
import {Link} from "react-router-dom";

const User = (props) => {
    return (
        <li className={s.item}>
            <Link to={'/profile/' + props.id}>
                <div className={s.user}>
                        <div className={s.name}>{props.name}</div>
                        <div className={s.status}>{`${props.status}`}</div>
                </div>
            </Link>
        </li>
    )
}

export default User;
