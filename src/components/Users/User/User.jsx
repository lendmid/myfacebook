import React from 'react';
import s from './User.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <NavLink to={'/profile/' + props.id} className={s.link}>
            <div className={s.user}>
                    <div className={s.name}>{props.name}</div>
                    <button className={s.followed}>{`${props.followed}`}</button>
                    <div className={s.status}>{`${props.status}`}</div>
            </div>
        </NavLink>
    )
}

export default User;
