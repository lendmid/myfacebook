import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Post from './Post/Post';
import Profile from "./Profile";
import {requestStatus, updateStatus} from "../../redux/profileReducer";
import {compose} from "redux";
import {getAuthUserData} from "../../redux/authReducer";


const mapStateToProps = (state) => ({
    posts: state.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />),
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    login: state.auth.login
});

const ProfileContainer = compose(
    connect(mapStateToProps, {requestStatus, updateStatus, getAuthUserData}),
    withRouter,
)(Profile);

export default ProfileContainer;