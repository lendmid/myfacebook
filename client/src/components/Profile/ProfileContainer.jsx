import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {getProfile, getStatus, savePhoto, updateStatus} from "../../redux/profileReducer";
import {compose} from "redux";
import Preloader from "../common/Preloader/Preloader";
import PostConrainer from "./Post/PostContainer";


const ProfileContainer = React.memo((props) => {
    
    let {match, authorizedUserId, profile, isLoading, getProfile, getStatus} = props;
    
    useEffect(() => {
        if (!match.params.userId) return;
        let userId = Number(match.params.userId);
        if (!userId) userId = authorizedUserId;
        getProfile(userId).then(() => {
            getStatus(userId);
        });
    }, [match.params.userId, authorizedUserId, getProfile, getStatus]);
    
    if (!profile || isLoading) return <Preloader/>;
    
    return <Profile {...props}
                    isOwner={authorizedUserId === Number(match.params.userId)} />;
});


let mapStateToProps = (state) => ({
    posts: state.profilePage.posts.map(post => <PostConrainer message={post.message} likesCount={post.likesCount} key={post.id} id={post.id} />),
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.authorizedUserId,
    isLoading: state.profilePage.isLoading,
});

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
)(ProfileContainer)
