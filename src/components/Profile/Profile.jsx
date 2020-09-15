import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';
import AddPostContainer from './Posts/AddPost/AddPostContainer';


const Profile = ({status, updateStatus, posts}) => {
    
    return (
        <div className={s.profile}>
            <ProfileHeader status={status} updateStatus={updateStatus}/>
            <div className={s.profile_information}>
                <AddPostContainer />
                {posts}
            </div>
        </div>
    )
}

export default Profile;
