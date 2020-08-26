import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';
import AddPostContainer from './Posts/AddPost/AddPostContainer';


const Profile = (props) => {
    if (props.profile) console.log(props.profile)
    return (
        <div className={s.profile}>
            <ProfileHeader props={props}/>
            <div className={s.profile_information}>
                <AddPostContainer />
                {props.posts}
            </div>
        </div>
    )
}

export default Profile;
