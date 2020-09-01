import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Post from '././Posts/Post';
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profileReducer";
import {compose} from "redux";
import {getAuthUserData} from "../../redux/authReducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
        this.props.getUserProfile(userId);
    }
    
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    posts: state.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />),
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getAuthUserData}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
