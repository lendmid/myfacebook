import React from 'react';
import s from './User.module.css';

const User = (props) => {
    debugger
    return (
        <div>
            <div className={s.fullName}>{props.fullName}</div>
            <div className={s.followed}>{props.followed}</div>
            <div className={s.status}>{props.status}</div>
            <div className={s.city}>{props.city}</div>
            <div className={s.country}>{props.country}</div>
        </div>
    )
}

export default User;
