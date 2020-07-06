import React from 'react';
import MyPosts from './MyPosts/MyPost';
import s from './Profile.module.css';


const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.profile_header}>
                <div className={s.foto}>
                    <div className={s.background_photo}>
                        <div className={s.gradient}><div className={s.second_gradient}></div></div>
                        <img src="http://www.topoboi.com/pic/201310/1600x900/topoboi.com-21405.jpg" alt="background"/>
                    </div>
                    <div className={s.face_photo}>
                        <img src="https://scontent.fhel3-1.fna.fbcdn.net/v/t1.0-1/c0.50.200.200a/p200x200/55770075_107719600409031_3462998651494727680_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_ohc=r-2XIJCbF-sAX_GJWeS&_nc_ht=scontent.fhel3-1.fna&oh=fd42d1b968711c863f81262d2cd3d413&oe=5F25C7CE" alt="face_photo" />
                    </div>
                </div>
                <div className={s.short_biography}>
                    <span>Дорошенко Дмитрий</span> 
                </div>
            </div>
            <div className={s.profile_information}>
            <MyPosts />

            </div>
        </div>
    )
}
export default Profile;