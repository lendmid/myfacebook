import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post_wrapper}>
      <img src="https://mestart.ru/wp-content/uploads/2015/02/kvadratnaya.gif" alt="robot" />
      { props.message }
      <div className={s.likes}>{props.likesCount} Likes</div> 
    </div>
  )
}
export default Post;
