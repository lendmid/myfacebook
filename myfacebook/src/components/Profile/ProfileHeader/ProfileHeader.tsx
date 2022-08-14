import React, {useState} from 'react';
import s from './ProfileHeader.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import UpdatePhotoPopup from "./UpdatePhotoPopup/UpdatePhotoPopup"
import user_avatar from "../../../assets/images/user_avatar.png"
import avatar_bg from "../../../assets/images/avatar_background.jpg"
import camera_icon from "../../../assets/images/camera_icon.png"
import {IProfile} from "../../../store/reducers/profile.reducer";


interface IProps {
    profile: IProfile
    isOwner: boolean
    updateStatus(): void
    savePhoto(): void
}


const ProfileHeader = React.memo(({profile, updateStatus, isOwner, savePhoto}: IProps) => {

    let [isPhotoPopup, setIsPhotoPopup] = useState(false);

    let openPhoto = () => {
        let popup = document.getElementById('userPhoto');
        if (!popup) return
        popup.style.display = "block";
    }

    let closePhoto = () => {
        let popup = document.getElementById('userPhoto');
        if (!popup) return
        popup.style.display = "none";
    }

    return (
        <div className={s.profile_header}>
            {isPhotoPopup && <UpdatePhotoPopup setIsPhotoPopup={setIsPhotoPopup} savePhoto={savePhoto}/>}
            <div className={s.photo_wrapper}>
                <div className={s.background_photo}>
                    <div className={s.gradient}>
                        <div className={s.second_gradient}/>
                    </div>
                    <img src={avatar_bg} alt="background"/>
                </div>
                <button className={s.photo} onClick={() => isOwner ? setIsPhotoPopup(true) : openPhoto()}>
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
                <ProfileStatus status={profile.status} updateStatus={updateStatus} isOwner={isOwner}/>
            </div>
        </div>
    )
})

export default ProfileHeader;
