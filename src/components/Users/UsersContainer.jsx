import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {requestUsers} from "../../redux/usersReducer";
import {getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsers} from "../../redux/usersSelectors";
import {getProfile, getStatus, resetProfile} from "../../redux/profileReducer";
import User from "./User/User";
import Users from "./Users";
import PostConrainer from "../Profile/Post/PostContainer";


class UsersContainer extends React.PureComponent {
    refreshProfile = () => {
        if (!this.props.match.params.userId) return;
        let userId = Number(this.props.match.params.userId);
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    
    componentDidMount() {
        if (!this.props.users.length) this.props.requestUsers(this.props.currentPage, this.props.pageSize)
        this.refreshProfile();
    }
    
    componentDidUpdate = prevProps => {
        if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile();
    };
    
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }
    
    render() {
        return <Users {...this.props}
                      profile={!this.props.match.params.userId ? null : this.props.profile}
                      onPageChanged={this.onPageChanged} />
    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state).map(user => <User key={user.id} userId={user.id} name={user.name} status={user.status} photo={user.photos.large} />),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    posts: state.profilePage.posts.map(post => <PostConrainer message={post.message} likesCount={post.likesCount} key={post.id} id={post.id} />),
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, requestUsers, resetProfile}),
    withRouter,
)(UsersContainer)
