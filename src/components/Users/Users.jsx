import React from 'react';

const Users = (props) => {
    return (
        <div>
            {
                props.users.map(u => <div key={u.id} fullName></div>)
            }
        </div>
    )
}

export default Users;
