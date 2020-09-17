import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Post from './Post/Post';
import Profile from "./Profile";
import {requestProfile, requestStatus, updateStatus} from "../../redux/profileReducer";
import {compose} from "redux";
import {getAuthUserData} from "../../redux/authReducer";
import Preloader from "../common/Preloader/Preloader";


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


// const ProfileContainer = React.memo((props) => {
//
//
//
//     if (!props.profile) return <Preloader/>
//     return <Profile {...props} />;
// })
//
// export default ProfileContainer;

class ProfileContainer extends React.PureComponent {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!Number.isInteger(userId)) userId = this.props.authorizedUserId;
        this.props.requestProfile(userId);
        this.props.requestStatus(userId);
        debugger
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
    
    }
    
    render() {
        if (!this.props.profile) return <Preloader/>
        return <Profile {...this.props} />;
    }
}

let mapStateToProps = (state) => ({
    posts: state.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />),
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.authorizedUserId,
})

export default compose(
    connect(mapStateToProps, {requestProfile, requestStatus, updateStatus, getAuthUserData}),
    withRouter,
)(ProfileContainer)
