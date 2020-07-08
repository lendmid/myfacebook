import React from "react";
import s from './AddPost.module.css';

const AddPost = (props) => {

  let addPost = () => {
    let text = newPostElement.current.value; 
    alert(text)
  }

  let newPostElement = React.createRef();

  return (
    <div className={s.add_post_wrapper}>
      <textarea ref={newPostElement} name="" id="" cols="30" rows="5">Опубликуйте что-нибудь</textarea>
      <button onClick={ addPost }>Add post</button>
    </div>  
  )
}
export default AddPost;
