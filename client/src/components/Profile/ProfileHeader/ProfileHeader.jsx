import React from 'react';
import s from './ProfileHeader.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import UpdatePhotoPopup from "./UpdatePhotoPopup/UpdatePhotoPopup"
import user_avatar from "../../../assets/images/user_avatar.png"
import avatar_bg from "../../../assets/images/avatar_background.jpg"
import camera_icon from "../../../assets/images/camera_icon.png"


const ProfileHeader = React.memo(({profile, status, updateStatus, isOwner, savePhoto, updatePhotoPopup, setUpdatePhotoPopup, ...props}) => {
    
    let openPhoto = () => {
        let popup = document.getElementById('userPhoto');
        popup.style.display = "block";
    }
    
    let closePhoto = () => {
        let popup = document.getElementById('userPhoto');
        popup.style.display = "none";
    }
    
    return (
        <div className={s.profile_header}>
            {updatePhotoPopup && <UpdatePhotoPopup setUpdatePhotoPopup={setUpdatePhotoPopup} savePhoto={savePhoto} />}
            <div className={s.photo_wrapper}>
                <div className={s.background_photo}>
                    <div className={s.gradient}>
                        <div className={s.second_gradient}></div>
                    </div>
                    <img src={avatar_bg} alt="background" />
                </div>
                <button className={s.photo} onClick={() => isOwner ? setUpdatePhotoPopup(true) : openPhoto()}>
                    <img src={profile.photo ? profile.photo : user_avatar} className={s.user_photo} alt="user_photo"/>
                    {isOwner && <img src={camera_icon} alt="camera icon" className={s.camera_icon}/>}
                </button>
                {!isOwner &&
                <div onClick={closePhoto} id="userPhoto" className={s.popup}>
                    <img className={s.full_img} src={profile.photo || user_avatar} alt=""/>
                </div>
                }
            </div>
            <div className={s.short_biography}>
                <span className={s.fullName}>{`${profile.firstName} ${profile.lastName}`}</span>
                <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner}/>
            </div>
        </div>
    )
})

export default ProfileHeader;
