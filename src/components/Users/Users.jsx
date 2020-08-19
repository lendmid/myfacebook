import React from 'react';
import s from './Users.module.css';
import axios from "axios";


const Users = (props) => {
    
    let getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }
    
    return (
        <div className={s.users}>
            {props.users}
            <button className={s.button} onClick={getUsers}>Get users</button>
        </div>
    )
}

export default Users;
