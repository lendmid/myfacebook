import React from 'react';
import s from './Users.module.css';


const Users = React.memo(({onPageChanged, currentPage, users}) => {
    //refactoring: сделать, чтобы по клику на пользователя отображался профиль пользователя в области справа. По умолчанию выбран первый пользователь
    
    let onScrollHandler = (e) => {
        let uL = document.getElementById('usersList');
        if ((uL.clientHeight + uL.scrollTop) === uL.scrollHeight) onPageChanged(currentPage + 1);
    }
    
    return (
        <div className={s.users}>
            <div className={s.users_header}>
                <h2>All users in myFacebook</h2>
            </div>
            <ul className={s.users_list} id="usersList" onScroll={onScrollHandler}>
                {users}
            </ul>
        </div>
    )
})

export default Users;
