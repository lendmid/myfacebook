import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';
import AddPostContainer from './Posts/AddPost/AddPostContainer';
import Post from '././Posts/Post';

const Profile = (props) => {
    debugger
    let postsElement = props.store.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    return (
        <div className={s.profile}>
            <ProfileHeader />
            <div className={s.profile_information}>
                {/* <AddPostContainer dispatch={props.dispatch} newPostText={props.profilePage.newPostText} /> */}
                <AddPostContainer store={props.store} />
                {postsElement}
            </div>
        </div>
    )
}
export default Profile;