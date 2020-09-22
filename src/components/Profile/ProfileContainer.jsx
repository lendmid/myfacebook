import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {deletePostThunk, getProfile, getStatus, savePhoto, updateStatus} from "../../redux/profileReducer";
import {compose} from "redux";
import Preloader from "../common/Preloader/Preloader";
import PostConrainer from "./Post/PostContainer";


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
    posts: state.profilePage.posts.map(post => <PostConrainer message={post.message} likesCount={post.likesCount} key={post.id} id={post.id} />),
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.authorizedUserId,
})

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, deletePostThunk}),
    withRouter,
)(ProfileContainer)
