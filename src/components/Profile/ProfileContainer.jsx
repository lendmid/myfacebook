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
        // this.props.getAuthUserData();
        // let userId = this.props.match.params.userId ? this.props.match.params.userId : 11132;
        // let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.authorizedUserId;
        // this.props.getProfile(userId);
        // this.props.getStatus(userId);
    }
    
    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    posts: state.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />),
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId
})

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, getAuthUserData}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)
