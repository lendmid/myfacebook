import React from 'react';
import s from './Users.module.css';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return (
        <div className={s.users}>
            <div className={s.numbers}>
                {pages.map(page => {
                    return <span className={props.currentPage === page && s.selectedPage || s.nonSelectedPage}
                                 onClick={() => props.onPageChanged(page)}>{page}</span>
                })}
            </div>
            {props.users}
        </div>
    )
}

export default Users;
