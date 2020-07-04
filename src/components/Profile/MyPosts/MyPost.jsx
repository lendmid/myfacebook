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
                post 1
            </div>
        </div>
    </div>
  );
};
export default MyPosts;
