import React from 'react';
import Post from '././Posts/Post';
import {connect} from "react-redux";
import Profile from "./Profile";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />),
    }
}

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;