import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {requestUsers} from "../../redux/usersReducer";
import {getCurrentPage, getPageSize, getTotalUsersCount, getUsers} from "../../redux/usersSelectors";
import {getProfile, getStatus} from "../../redux/profileReducer";
import User from "./User/User";
import Users from "./Users";
import PostConrainer from "../Profile/Post/PostContainer";


const UsersContainer = React.memo((props) => {
    let {match, users, profile, currentPage, pageSize, getProfile, getStatus, requestUsers} = props;
    
    useEffect(() => {
        if (users.length === 0) requestUsers(currentPage, pageSize);
    
        if (!match.params.userId) return;
        let userId = Number(match.params.userId);
        getProfile(userId).then(() => {
            getStatus(userId);
        });
    }, [match.params.userId, users.length, currentPage, pageSize, getProfile, getStatus, requestUsers]);
    
    let onPageChanged = (pageNumber) => {
        requestUsers(pageNumber, pageSize);
    };
    
    return <Users {...props}
                  profile={!match.params.userId ? null : profile}
                  onPageChanged={onPageChanged} />
});


const mapStateToProps = (state) => ({
    users: getUsers(state).map((user) => <User key={user.id} userId={user.id} name={user.name}
                                               status={user.status} photo={user.photos.large} />),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    posts: state.profilePage.posts.map(post => <PostConrainer message={post.message} likesCount={post.likesCount} key={post.id} id={post.id} />),
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isLoading: state.profilePage.isLoading,
});

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, requestUsers}),
    withRouter,
)(UsersContainer)
