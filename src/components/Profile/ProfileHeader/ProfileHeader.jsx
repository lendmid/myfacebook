import React from 'react';
import s from './ProfileHeader.module.css';
import ProfileStatus from "./ProfileStatus"


const ProfileHeader = (props) => {
    return (
        <div className={s.profile_header}>
            <div className={s.foto}>
                <div className={s.background_photo}>
                    <div className={s.gradient}><div className={s.second_gradient}></div></div>
                    <img src="http://www.topoboi.com/pic/201310/1600x900/topoboi.com-21405.jpg" alt="background"/>
                </div>
                <div className={s.face_photo}>
                    <img src="https://cutt.ly/sdPfYQr" alt="face_photo" />
                </div>
            </div>
            <div className={s.short_biography}>
                <span>Дорошенко Дмитрий</span>
                <ProfileStatus status={'Hello'} />
            </div>
        </div>
    )
}

export default ProfileHeader;
