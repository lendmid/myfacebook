import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import User from "./User/User";


let mapStateToProps = (state) => {
    return {
        // users: state.usersPage.users.map(user => <User key={user.id} followed={user.followed} fullName={user.fullName} status={user.status} city={user.location.city} country={user.location.country} />),
        users: state.usersPage.users.map(user => <User key={user.id} followed={user.followed} name={user.name} status={user.status} />),
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
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
