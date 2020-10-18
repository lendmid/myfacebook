import React, {FC} from 'react';
import s from './Users.module.css';
import preview_profile from "../../assets/images/preview_profile.svg"
import User from "./User/User";
import PreloaderUsers from "../common/PreloaderUsers/Preloader";
import Profile from "../Profile/Profile";
import {ProfileType, UserType} from "../../types/types";


type PropsType = {
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: UserType[]
    isLoading: boolean
    totalUsersCount: number
    profile: ProfileType
}

const Users: FC<PropsType> = React.memo(({onPageChanged, currentPage, users, isLoading, totalUsersCount, ...props}) => {

    let onScrollHandler = (e: any) => {
        let usersList: any = document.getElementById('usersList');
        if ((usersList.clientHeight + usersList.scrollTop) === usersList.scrollHeight) onPageChanged(currentPage + 1);
    }

    return (
        <div className={s.users}>
            <div className={s.users_list_wrapper}>
                <div className={s.users_header}>
                    <span className={s.total_users_count_wrapper}>Total count users in myFacebook: <span
                        className={s.total_users_count}>{totalUsersCount}</span></span>
                </div>
                <ul className={s.users_list} id="usersList" onScroll={onScrollHandler}>
                    {users}
                    <User />
                    <User />
                </ul>
            </div>
            <div className={s.profile_preview}>
                {isLoading && <PreloaderUsers />}
                {props.profile && !isLoading && <Profile {...props} />}
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
