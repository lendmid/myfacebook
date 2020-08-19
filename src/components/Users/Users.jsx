import React from 'react';
import s from './Users.module.css';
import axios from "axios";


class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    
    render() {
        return (
            <div className={s.users}>
                {this.props.users}
            </div>
        )
    }
}

export default Users;
