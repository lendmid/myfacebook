import React, {useState} from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';
import AddPostContainer from './AddPost/AddPostContainer';
import ShortInformation from "./ShortInformation/ShortInformation";


const Profile = React.memo((props) => {
    
    let [updatePhotoPopup, setUpdatePhotoPopup] = useState(false);
    
    return (
        <div className={s.profile}>
            <ProfileHeader {...props}
                           updatePhotoPopup={updatePhotoPopup}
                           setUpdatePhotoPopup={setUpdatePhotoPopup} />
            <div className={s.profile_information}>
                <ShortInformation {...props} />
                <AddPostContainer />
                {props.posts}
            </div>
        </div>
    )
})

export default Profile;
