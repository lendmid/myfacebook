import React, {useState} from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';
import AddPostContainer from './AddPost/AddPostContainer';
import ShortInformation from "./ShortInformation/ShortInformation";


const Profile = React.memo((props) => {
    
    let [isUpdatePhotoPopup, setIsUpdatePhotoPopup] = useState(false);
    
    return (
        <div className={s.profile}>
            <ProfileHeader {...props}
                           isUpdatePhotoPopup={isUpdatePhotoPopup}
                           setIsUpdatePhotoPopup={setIsUpdatePhotoPopup} />
            <div className={s.profile_information}>
                <ShortInformation {...props} />
                <AddPostContainer />
                {props.posts}
            </div>
        </div>
    )
})

export default Profile;
