import React, {useState} from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';
import AddPostContainer from './AddPost/AddPostContainer';


const Profile = React.memo(({status, updateStatus, posts, profile, isOwner}) => {
    
    let [updatingPhoto, setUpdatingPhoto] = useState(false);
    
    return (
        <div className={s.profile}>
            <ProfileHeader status={status}
                           updateStatus={updateStatus}
                           fullName={profile.fullName}
                           isOwner={isOwner}
                           updatingPhoto={updatingPhoto}
                           setUpdatingPhoto={setUpdatingPhoto} />
            <div className={s.profile_information}>
                <AddPostContainer />
                {posts}
            </div>
        </div>
    )
})

export default Profile;
