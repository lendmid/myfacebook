import React, {useEffect} from 'react';
import s from './Users.module.css';
import preview_profile from "../../assets/images/preview_profile.svg"
import User from "./User/User";
import PreloaderUsers from "../common/PreloaderUsers/Preloader";
import Profile from "../Profile/Profile";
import {getProfile, IProfile} from "../../redux/profileReducer";
import {getCurrentPage, getPageSize, getTotalUsersCount, getUsers} from "../../redux/selectors/usersSelectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {requestUsers} from "../../redux/usersReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {IMatch} from "../../interfaces/IMatch";


export interface IUser {
    id?: string
    name?: string
    status?: string
    photo?: string | null
}

interface IProps extends RouteComponentProps<IMatch> {
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    pageSize: number
    users: IUser[] | []
    isLoading: boolean
    totalUsersCount: number
    profile: IProfile
    requestUsers(): void
}

const Users = React.memo(({onPageChanged, currentPage, pageSize, users, profile, isLoading, totalUsersCount, match}: IProps) => {

    useEffect(() => {
        if (users.length === 0) requestUsers(currentPage, pageSize);
    }, [match.params.userId, users.length, currentPage, pageSize, requestUsers]);


    // let {match, users, profile, currentPage, pageSize, getProfile, requestUsers} = props;
    //
    // useEffect(() => {
    //     if (users.length === 0) requestUsers(currentPage, pageSize);
    //
    //     if (!match.params.userId) return;
    //     let userId = Number(match.params.userId);
    //     getProfile(userId);
    // }, [match.params.userId, users.length, currentPage, pageSize, getProfile, requestUsers]);
    //
    // let onPageChanged = (pageNumber) => {
    //     requestUsers(pageNumber, pageSize);
    // };

    // return <Users {...props}
    //               profile={!match.params.userId ? null : profile}
    //               onPageChanged={onPageChanged}/>


    let onScrollHandler = () => {
        let usersList: any = document.getElementById('usersList');
        if ((usersList.clientHeight + usersList.scrollTop) === usersList.scrollHeight) onPageChanged(currentPage + 1);
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
                            <span className={s.not_picked_profile_span}>Select a person's name to see their profile in preview mode.</span>
                        </div>
                    </>
                }
            </div>
        </div>
    )
});


const mapStateToProps = (state: AppStateType) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    status: state.profilePage.profile.status,
    isLoading: state.profilePage.isLoading,
});

export default compose(
    connect(mapStateToProps, {getProfile, requestUsers}),
    withRouter,
)(Users)