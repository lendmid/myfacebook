import React from 'react';
import s from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";


let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users}) => {
    // let pagesCount = Math.ceil(totalUsersCount / pageSize);
    // let pages = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i);
    // }

    return (
        <div className={s.users}>
            <div className={s.users_header}>
                <span>All users in system</span>
            </div>
            {/*{pages.length ? <div className={s.numbers}>*/}
            {/*    {pages.map(pageNumber => {*/}
            {/*        return <span className={currentPage === pageNumber ? s.selectedPage : s.nonSelectedPage}*/}
            {/*                     onClick={() => onPageChanged(pageNumber)}>{pageNumber}</span>*/}
            {/*    })}*/}
            {/*</div> : null}*/}
            
            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            
            {users}
        </div>
    )
}

export default Users;
