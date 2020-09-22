import React from 'react';
import s from './ProfileHeader.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import UpdateUserPhoto from "./UpdateUserPhoto/UpdateUserPhoto"
import avatar from "../../../assets/images/avatar.jpg"
import avatar_bg from "../../../assets/images/avatar_background.jpg"
import camera_icon from "../../../assets/images/camera_icon.png"


const ProfileHeader = React.memo(({profile, status, updateStatus, isOwner, savePhoto, isUpdatePhotoPopup, setIsUpdatePhotoPopup}) => {

    return (
        <div className={s.profile_header}>
            {isUpdatePhotoPopup && <UpdateUserPhoto setIsUpdatePhotoPopup={setIsUpdatePhotoPopup} savePhoto={savePhoto} />}
            <div className={s.photo_wrapper}>
                <div className={s.background_photo}>
                    <div className={s.gradient}>
                        <div className={s.second_gradient}></div>
                    </div>
                    <img src={avatar_bg} alt="background" />
                </div>
                <button onClick={() => setIsUpdatePhotoPopup(true)} className={s.photo}>
                    <img src={profile.photos.large || avatar} className={s.user_photo} alt="user_photo" />
                    {isOwner &&
                    <img src={camera_icon} alt="camera_icon" className={s.camera_icon} />
                    }
                </button>
            </div>
            <div className={s.short_biography}>
                <span>{profile.fullName}</span>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
})

export default ProfileHeader;
