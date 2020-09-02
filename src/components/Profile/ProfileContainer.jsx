import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Post from '././Posts/Post';
import Profile from "./Profile";
import {getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {compose} from "redux";
import {getAuthUserData} from "../../redux/authReducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    posts: state.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />),
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
})

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, getAuthUserData}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)
