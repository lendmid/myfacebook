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
            {pages.length ? <div className={s.numbers}>
                {pages.map(pageNumber => {
                    return <span className={props.currentPage === pageNumber && s.selectedPage || s.nonSelectedPage}
                                 onClick={() => props.onPageChanged(pageNumber)}>{pageNumber}</span>
                })}
            </div> : null}
            {props.users}
        </div>
    )
}

export default Users;
