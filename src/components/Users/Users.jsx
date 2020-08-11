import React from 'react';
import s from './Users.module.css';
import {AxiosInstance as axios} from "axios";


const Users = (props) => {
    // debugger
    
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        // debugger
        console.log(response)
    })
    
    return (
        <div className={s.users}>
            {props.users}
        </div>
    )
}

export default Users;
