import React from 'react';
import s from './ProfileHeader.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import avatar from "../../../assets/images/avatar.jpg"
import avatar_bg from "../../../assets/images/avatar_background.jpg"


const ProfileHeader = React.memo(({fullName, status, updateStatus}) => {
    return (
        <div className={s.profile_header}>
            <div className={s.foto}>
                <div className={s.background_photo}>
                    <div className={s.gradient}><div className={s.second_gradient}></div></div>
                    <img src={avatar_bg} alt="background"/>
                </div>
                <div className={s.face_photo}>
                    <img src={avatar} alt="user_photo" />
                </div>
            </div>
            <div className={s.short_biography}>
                <span>{fullName}</span>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
})

export default ProfileHeader;
