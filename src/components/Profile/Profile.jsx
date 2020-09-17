import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';
import AddPostContainer from './AddPost/AddPostContainer';


const Profile = React.memo(({status, updateStatus, posts, profile}) => {
    return (
        <div className={s.profile}>
            <ProfileHeader status={status} updateStatus={updateStatus} fullName={profile.fullName}/>
            <div className={s.profile_information}>
                <AddPostContainer />
                {posts}
            </div>
        </div>
    )
})

export default Profile;
