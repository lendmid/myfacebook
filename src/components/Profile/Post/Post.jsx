import React from "react";
import s from './Post.module.css';


const Post = React.memo(({message, likesCount}) => {
    return (
        <div className={s.post_wrapper}>
            <img src="https://mestart.ru/wp-content/uploads/2015/02/kvadratnaya.gif" alt="photo_writer" />
            {message}
            <div className={s.likes}>{likesCount} Likes</div>
        </div>
    )
})

export default Post;
