import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';
import AddPostContainer from './Posts/AddPost/AddPostContainer';


const Profile = (props) => {
    
    return (
        <div className={s.profile}>
            <ProfileHeader status={props.status} updateStatus={props.updateStatus}/>
            <div className={s.profile_information}>
                <AddPostContainer />
                {props.posts}
            </div>
        </div>
    )
}

export default Profile;
