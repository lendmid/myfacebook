import React from 'react';
import s from './User.module.css';

const User = (props) => {
    // debugger
    return (
        <div className={s.user}>
            <div className={s.name}>{props.name}</div>
            <button className={s.followed}>{`${props.followed}`}</button>
            <div className={s.status}>{`${props.status}`}</div>
        </div>
    )
}

export default User;
