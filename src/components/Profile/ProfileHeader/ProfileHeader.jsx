import React from 'react';
import s from './ProfileHeader.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import UpdateUserPhoto from "./UpdateUserPhoto/UpdateUserPhoto"
import avatar from "../../../assets/images/avatar.jpg"
import avatar_bg from "../../../assets/images/avatar_background.jpg"
import camera_icon from "../../../assets/images/camera_icon.png"


const ProfileHeader = React.memo(({fullName, status, updateStatus, isOwner, updatingPhoto, setUpdatingPhoto}) => {
    
    return (
        <div className={s.profile_header}>
            {updatingPhoto && <UpdateUserPhoto setUpdatingPhoto={setUpdatingPhoto} />}
            <div className={s.foto}>
                <div className={s.background_photo}>
                    <div className={s.gradient}>
                        <div className={s.second_gradient}></div>
                    </div>
                    <img src={avatar_bg} alt="background" />
                </div>
                <button onClick={() => setUpdatingPhoto(true)} className={s.photo}>
                    <img src={avatar} className={s.user_photo} alt="user_photo" />
                    {isOwner &&
                    <img src={camera_icon} alt="camera_icon" className={s.camera_icon} />
                    }
                </button>
            </div>
            <div className={s.short_biography}>
                <span>{fullName}</span>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
})

export default ProfileHeader;
