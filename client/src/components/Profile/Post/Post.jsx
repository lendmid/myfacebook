import React from "react";
import s from './Post.module.css';
import user_avatar from "../../../assets/images/user_avatar.png"
import cross_post from "../../../assets/images/cross_post.svg"
import {connect} from "react-redux";
import {deletePost} from "../../../redux/profileReducer";

const Post = React.memo(({id, message, date, deletePost, firstName, lastName}) => {


    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <img src={user_avatar} alt="user avatar" className={s.avatar}/>
                <div>
                    <span className={s.fullName}>{`${firstName} ${lastName}`}</span>
                    <p className={s.date}>{date}</p>
                </div>
                <img className={s.close_icon} src={cross_post} alt="cross"/>
            </div>

            <p>{message}</p>
        </div>
    )
})

export default connect(null, {deletePost})(Post);

