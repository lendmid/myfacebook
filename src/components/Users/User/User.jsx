import React from 'react';
import s from './User.module.css';
import {Link} from "react-router-dom";


const User = React.memo(({id, name, status}) => {
    //refactoring: сделать чтобы по клику на пользователя происходила смена роута и открывалась страница другого пользователя
    return (
        <li className={s.item}>
            <Link to={`/profile/${id}`}>
                <div className={s.user}>
                        <div className={s.name}>{name}</div>
                        <div className={s.status}>{`${status}`}</div>
                </div>
            </Link>
        </li>
    )
})

export default User;
