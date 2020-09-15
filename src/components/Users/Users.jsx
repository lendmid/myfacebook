import React from 'react';
import s from './Users.module.css';


const Users = React.memo(({totalUsersCount, pageSize, currentPage, onPageChanged, users}) => {
    return (
        <div className={s.users}>
            <div className={s.users_header}>
                <h2>All users in system</h2>
                {/*<Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}/>*/}
            </div>
            <ul className={s.users_list}>
                {users}
            </ul>
        </div>
    )
})

export default Users;
