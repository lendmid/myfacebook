import React, {useState} from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';
import AddPostContainer from './AddPost/AddPostContainer';


const Profile = React.memo(({status, updateStatus, posts, profile, isOwner, savePhoto}) => {
    
    let [isUpdatePhotoPopup, setIsUpdatePhotoPopup] = useState(false);
    return (
        <div className={s.profile}>
            <ProfileHeader status={status}
                           updateStatus={updateStatus}
                           profile={profile}
                           isOwner={isOwner}
                           isUpdatePhotoPopup={isUpdatePhotoPopup}
                           setIsUpdatePhotoPopup={setIsUpdatePhotoPopup}
                           savePhoto={savePhoto} />
            <div className={s.profile_information}>
                <AddPostContainer />
                {posts}
            </div>
        </div>
    )
})

export default Profile;
