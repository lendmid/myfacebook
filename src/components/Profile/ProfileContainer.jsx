import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Post from './Post/Post';
import Profile from "./Profile";
import {requestProfile, requestStatus, updateStatus} from "../../redux/profileReducer";
import {compose} from "redux";
import {getAuthUserData} from "../../redux/authReducer";


// const mapStateToProps = (state) => ({
//     profile: state.profilePage.profile,
//     posts: state.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />),
//     status: state.profilePage.status,
//     isAuth: state.auth.isAuth,
//     userId: state.auth.userId,
//     login: state.auth.login
// });
//
// const ProfileContainer = compose(
//     connect(mapStateToProps, {requestStatus, updateStatus, getAuthUserData}),
//     withRouter,
// )(Profile);
//
// export default ProfileContainer;


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.requestProfile(userId);
    }
    
    render() {
        return (
            <Profile {...this.props} fullName={this.props.profile ? this.props.profile.fullName : ""}/>
        )
    }
}

let mapStateToProps = (state) => ({
    posts: state.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />),
    profile: state.profilePage.profile,
    // isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    // userId: state.auth.userId,
    // login: state.auth.login
})

export default compose(
    connect(mapStateToProps, {requestProfile, requestStatus, updateStatus, getAuthUserData}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)
