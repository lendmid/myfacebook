import React from "react";
import s from './MyPost.module.css';

const MyPosts = () => {
  return (
    <div className="">
        My posts
        <div>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <button>Add post</button>
              <button>Remove</button>
        </div>         
        <div className="{s.posts}">
            <div className="{s.item}">
                {/* <img src="http://hq-oboi.ru/photo/kotik_kak_pushistyy_komochek_1920x1200.jpg" alt="exaple"/> */}
                post 1
            </div>
        </div>
    </div>
  );
};
export default MyPosts;
