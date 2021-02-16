import React, {useEffect} from 'react';
import s from './Users.module.css';
import preview_profile from "../../assets/images/preview_profile.svg"
import User from "./User/User";
import PreloaderUsers from "../common/PreloaderUsers/Preloader";
import Profile from "../Profile/Profile";
import {getProfile, IProfile} from "../../redux/profileReducer";
import {getTotalUsersCount, getUsers} from "../../redux/selectors/usersSelectors";
import {connect} from "react-redux";
import {requestUsers} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";


export interface IUser {
    id?: string
    name?: string
    status?: string
    photo?: string | null
}

interface IProps {
    users: IUser[] | []
    profile: IProfile | null
    totalUsersCount: number
    isLoading: boolean
    requestUsers(lastId?: string): void
}

const Users = React.memo(({users, profile, totalUsersCount, isLoading, requestUsers}: IProps) => {

    useEffect(() => {
        if (users.length === 0) requestUsers()
    }, [users.length, requestUsers]);

    let onScrollHandler = () => {
        let usersList: any = document.getElementById('usersList');
        if ((usersList.clientHeight + usersList.scrollTop) === usersList.scrollHeight) requestUsers(users[users.length - 1].id);
    };

    return (
        <div className={s.users}>
            <div className={s.users_list_wrapper}>
                <div className={s.users_header}>
                    <span className={s.total_users_count_wrapper}>Total count users in myFacebook: <span
                        className={s.total_users_count}>{totalUsersCount}</span></span>
                </div>
                <ul className={s.users_list} id="usersList" onScroll={onScrollHandler}>
                    {users && (users as Array<IUser>).map((user) => {
                        return <User key={user.id} id={user.id} name={user.name} status={user.status}
                                     photo={user.photo}/>
                    })}
                    <User/>
                    <User/>
                </ul>
            </div>
            <div className={s.profile_preview}>
                {isLoading && <PreloaderUsers/>}
                {!isLoading &&
                profile ?
                    <Profile/> :
                    <>
                        <div className={s.not_picked_profile}>
                            <img src={preview_profile} alt="Profile preview" className={s.icon_people}/>
                            <span className={s.not_picked_profile_span}>Select a person's that to see their profile in preview mode.</span>
                        </div>
                    </>
                }
            </div>
        </div>
    )
});


const mapStateToProps = (state: AppStateType) => ({
    users: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    profile: state.profilePage.profile,
    isLoading: state.profilePage.isLoading,
});

export default connect(mapStateToProps, {getProfile, requestUsers})(Users);
// export default Users;
