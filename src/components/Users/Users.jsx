import React from 'react';
import s from './Users.module.css';
import preview_profile from "../../assets/images/preview_profile.svg"
import User from "./User/User";
import PreloaderUsers from "../common/PreloaderUsers/Preloader";
import Profile from "../Profile/Profile";


const Users = React.memo(({onPageChanged, currentPage, users, isLoading, ...props}) => {
    
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
                {isLoading && <PreloaderUsers />}
                {props.profile && !isLoading && <Profile {...props} isOwner={false} />}
                {!props.profile && !isLoading &&
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
