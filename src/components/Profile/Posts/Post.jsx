import React from "react";
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.post_wrapper}>
            <img src="https://mestart.ru/wp-content/uploads/2015/02/kvadratnaya.gif" alt="robot" />
            {/*<img src="http://placekitten.com/g/50/50" alt="robot" />*/}
            {/*<img src="https://loremflickr.com/g/50/50/man" alt="robot" />*/}
            {props.message}
            <div className={s.likes}>{props.likesCount} Likes</div>
        </div>
    )
}

export default Post;
