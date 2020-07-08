import React from "react";
import s from './AddPost.module.css';

const AddPost = (props) => {
  return (
    <div className={s.add_post_wrapper}>
      <textarea name="" id="" cols="30" rows="5">Опубликуйте что-нибудь</textarea>
      <button>Add post</button>
    </div>  
  )
}
export default AddPost;
