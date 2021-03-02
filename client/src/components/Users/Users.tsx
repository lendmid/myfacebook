import React, {useEffect} from 'react';
import s from './Users.module.css';
import preview_profile from "../../assets/images/preview_profile.svg"
import User from "./User/User";
import PreloaderUsers from "../common/PreloaderUsers/Preloader";
import Profile from "../Profile/Profile";
import {getProfile, IProfile} from "../../redux/profileReducer";
import {getTotalUsersCount, getUsers} from "../../redux/selectors/usersSelectors";
import {connect} from "react-redux";
import {IUser, requestUsers} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps} from "react-router-dom";
import {IMatch} from "../../interfaces/IMatch";


interface IProps extends RouteComponentProps<IMatch> {
    users: IUser[] | []
    profile: IProfile | null
    totalUsersCount: number
    isLoading: boolean
    usersIsRequested: boolean
    requestUsers(lastId?: string): void
}

const Users = React.memo(({users, profile, totalUsersCount, isLoading, requestUsers, usersIsRequested, match}: IProps) => {

    useEffect(() => {
        if (!usersIsRequested) requestUsers()
    }, [usersIsRequested, requestUsers]);

    //todo: added debounce function
    let onScrollHandler = (event: React.UIEvent<HTMLElement>) => {
        let usersList = event.currentTarget
        if ((usersList.clientHeight + usersList.scrollTop) === usersList.scrollHeight) requestUsers(users[users.length - 1].id);
    };

    return (
        <div className={s.users}>
            <div className={s.users_list_wrapper}>
                <div className={s.users_header}>
                    <span className={s.total_users_count_wrapper}>Total count users in myFacebook: <span
                        className={s.total_users_count}>{totalUsersCount}</span></span>
                </div>
                <ul className={s.users_list} onScroll={onScrollHandler}>
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
                {!isLoading && profile && match.params.userId ?
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
    usersIsRequested: state.usersPage.usersIsRequested,
});

export default connect(mapStateToProps, {getProfile, requestUsers})(Users);
