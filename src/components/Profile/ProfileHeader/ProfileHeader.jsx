import React from 'react';
import s from './ProfileHeader.module.css';
import ProfileStatus from "./ProfileStatus"
import avatar from "../../../assets/images/avatar.jpg"
import avatar_bg from "../../../assets/images/avatar_background.jpg"


const ProfileHeader = (props) => {
    return (
        <div className={s.profile_header}>
            <div className={s.foto}>
                <div className={s.background_photo}>
                    <div className={s.gradient}><div className={s.second_gradient}></div></div>
                    <img src={avatar_bg} alt="background"/>
                </div>
                <div className={s.face_photo}>
                    <img src={avatar} alt="face_photo" />
                </div>
            </div>
            <div className={s.short_biography}>
                <span>Дорошенко Дмитрий</span>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileHeader;
