import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';
import AddPost from './Posts/AddPost/AddPost';
import Post from '././Posts/Post';

const Profile = (props) => {
    let postsElement =
        props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    return (
        <div className={s.profile}>
            <ProfileHeader />
            <div className={s.profile_information}>
                <AddPost addPost={props.addPost} />
                {postsElement}
            </div>
        </div>
    )
}
export default Profile;