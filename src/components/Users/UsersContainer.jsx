import React from "react";
import {connect} from "react-redux";
import {requestUsers} from "../../redux/usersReducer";
import User from "./User/User";
import Users from "./Users";
import {getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsers} from "../../redux/usersSelectors";


class UsersContainer extends React.PureComponent {
    componentDidMount() {
        if (!this.props.users.length) this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <Users {...this.props} onPageChanged={this.onPageChanged} />
    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state).map(user => <User key={user.id} userId={user.id} name={user.name} status={user.status} photo={user.photos.large} />),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
})

export default connect(mapStateToProps, {requestUsers})(UsersContainer);
