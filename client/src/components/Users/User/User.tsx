import React from 'react';
import s from './User.module.css';
import {Link} from "react-router-dom";
import {IUser} from "../../../redux/usersReducer";


const User = React.memo(({id, name, status, photo}: IUser) => {
    return (
        <li className={s.item}>
            {id ?
                <Link to={`/users/${id}`}>
                    <div className={s.user}>
                        {photo && <img src={photo} className={s.photo} alt="users avatar"/>}
                        <div className={s.name}>{name}</div>
                        <div className={s.status}>{`${status}`}</div>
                    </div>
                </Link>
                :
                <div className={s.user}>
                    <div className={s.empty_photo}/>
                    <div className={s.empty_name}/>
                </div>
            }
        </li>
    )
})

export default User;