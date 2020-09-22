import React from "react";
import s from './Post.module.css';
import user_avatar from "../../../assets/images/user_avatar.png"

const Post = React.memo((props) => {
    return (
        <div className={s.post_wrapper}>
            <img src={user_avatar} alt="photo_writer" />
            {props.message}
            <div className={s.likes}>{props.likesCount} Likes</div>
            <button className={s.close_icon} onClick={() => props.deletePostThunk(props.id)}>╳</button>
        </div>
    )
})

export default Post;
