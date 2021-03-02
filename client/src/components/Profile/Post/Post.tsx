import React from "react";
import s from './Post.module.css';
import user_avatar from "../../../assets/images/user_avatar.png"
import cross_post from "../../../assets/images/cross_post.svg"
import {connect} from "react-redux";
import {deletePost} from "../../../redux/profile.reducer";


interface IProps {
    id: string
    message: string
    date: string
    firstName: string
    lastName: string
    deletePost(id: string): void
}


const Post = React.memo(({id, message, date, firstName, lastName, deletePost}: IProps) => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <img src={user_avatar} alt="user avatar" className={s.avatar}/>
                <div>
                    <span className={s.fullName}>{`${firstName} ${lastName}`}</span>
                    <p className={s.date}>{date}</p>
                </div>
                <button type="button" className={s.close} onClick={() => deletePost(id)}>
                    <img className={s.close_icon} src={cross_post} alt="cross"/>
                </button>
            </div>

            <p>{message}</p>
        </div>
    )
})

export default connect(null, {deletePost})(Post);
