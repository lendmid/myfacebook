import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/usersReducer";
import User from "./User/User";
import UsersAPIComponent from "./UsersAPIComponent";


let mapStateToProps = (state) => {
    return {
        // users: state.usersPage.users.map(user => <User key={user.id} followed={user.followed} fullName={user.fullName} status={user.status} city={user.location.city} country={user.location.country} />),
        users: state.usersPage.users.map(user => <User key={user.id} followed={user.followed} name={user.name} status={user.status} />),
        pageSize: state.usersPage.pageSizae,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;
