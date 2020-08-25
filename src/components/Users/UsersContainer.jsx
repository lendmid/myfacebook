import React from "react";
import {connect} from "react-redux";
import {follow, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, unfollow} from "../../redux/usersReducer";
import User from "./User/User";
import Users from "./Users";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(Math.ceil(response.data.totalCount / 100))
        })
    }
    
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
        })
    }
    
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users.map(user => <User key={user.id} id={user.id} followed={user.followed} name={user.name} status={user.status} />),
        pageSize: state.usersPage.pageSizae,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
})(UsersContainer);
