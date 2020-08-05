import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';
import AddPostContainer from './Posts/AddPost/AddPostContainer';
import Post from '././Posts/Post';
import {connect} from "react-redux";


const Profile = (props) => {
    let state = props.store.getState();
    let oldPosts = state.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)
    
    return (
        <div className={s.profile}>
            <ProfileHeader />
            <div className={s.profile_information}>
                <AddPostContainer store={props.store} />
                {oldPosts}
            </div>
        </div>
    )
}

export default Profile;
