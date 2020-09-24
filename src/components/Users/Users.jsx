import React from 'react';
import s from './Users.module.css';
import preview_profile from "../../assets/images/preview_profile.svg"
import User from "./User/User";
import PreloaderUsers from "../common/PreloaderUsers/Preloader";
import Profile from "../Profile/Profile";


const Users = React.memo(({isFetching, onPageChanged, currentPage, users, ...props}) => {
    //refactoring: сделать, чтобы по клику на пользователя отображался профиль пользователя в области справа. По умолчанию выбран первый пользователь
    
    let onScrollHandler = (e) => {
        let uL = document.getElementById('usersList');
        if ((uL.clientHeight + uL.scrollTop) === uL.scrollHeight) onPageChanged(currentPage + 1);
    }
    
    return (
        <div className={s.users}>
            <div className={s.users_list_wrapper}>
                <div className={s.users_header}>
                    <h2>All users in myFacebook</h2>
                </div>
                <ul className={s.users_list} id="usersList" onScroll={onScrollHandler}>
                    {users}
                    <User />
                    <User />
                </ul>
            </div>
            <div className={s.profile_preview}>
                {props.profile && !props.isFetching &&
                <Profile {...props} isOwner={false} />
                }
                {props.isFetching &&
                <PreloaderUsers />
                }
                {!props.profile &&
                <>
                        <div className={s.not_picked_profile}>
                            <img src={preview_profile} alt="Profile preview" className={s.icon_people} />
                            <span className={s.not_picked_profile_span}>Select a person's name to see their profile in preview mode.</span>
                        </div>
                    </>
                }
            </div>
        </div>
    )
})

export default Users;
