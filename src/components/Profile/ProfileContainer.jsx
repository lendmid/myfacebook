import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Post from './Post/Post';
import Profile from "./Profile";
import {getProfile, getStatus, savePhoto, updateStatus} from "../../redux/profileReducer";
import {compose} from "redux";
import Preloader from "../common/Preloader/Preloader";


class ProfileContainer extends React.PureComponent {
    refreshProfile = () => {
        let userId = Number(this.props.match.params.userId);
        if (!userId) userId = this.props.authorizedUserId;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    
    componentDidMount = () => {
        this.refreshProfile();
    };
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile();
    }
    
    render() {
        if (!this.props.profile) return <Preloader />
        return <Profile {...this.props} isOwner={this.props.authorizedUserId === Number(this.props.match.params.userId)} />;
    }
}

let mapStateToProps = (state) => ({
    posts: state.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />),
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.authorizedUserId,
})

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
)(ProfileContainer)
