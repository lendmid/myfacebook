import React from 'react';
import s from './Users.module.css';
import axios from "axios";


const Users = (props) => {
    
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    })
    
    let getUsers = () => {
        // console.log('click')
    }
    
    
    return (
        <div className={s.users}>
            {props.users}
            <button className={s.button} onClick={getUsers}>Кнопка</button>
        </div>
    )
}

export default Users;
