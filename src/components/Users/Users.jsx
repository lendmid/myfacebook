import React from 'react';
import s from './Users.module.css';


const Users = (props) => {
    return (
        <div className={s.users}>
            {props.users}
        </div>
    )
}

export default Users;
