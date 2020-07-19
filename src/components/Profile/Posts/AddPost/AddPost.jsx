import React from "react";
import s from './AddPost.module.css';

const AddPost = (props) => {

  debugger
  let addPost = () => {
    let text = newPostElement.current.value; 
    props.addPost(text)
  }

  let newPostElement = React.createRef();

  return (
    <div className={s.add_post_wrapper}>
      <textarea ref={newPostElement} name="" id="" cols="30" rows="5" placeholder="Опубликуйте что-нибудь"></textarea>
      <button onClick={ addPost }>Add post</button>
    </div>  
  )
}
export default AddPost;
