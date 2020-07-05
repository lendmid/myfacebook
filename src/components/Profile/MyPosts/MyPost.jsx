import React from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.posts_wrapper}>
        <div className={s.create_post_wrapper}>
            <textarea name="" id="" cols="30" rows="5">Опубликуйте что-нибудь</textarea>
            <button>Add post</button>
          </div>         
        My posts
        <div className={s.posts}>
            <Post message='Hi, how are you?' />
            <Post message="It's my first teg" />
            <Post message='Hey' />
        </div>
    </div>
  )
}
export default MyPosts;
