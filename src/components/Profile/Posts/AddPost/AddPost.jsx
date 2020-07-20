import React from "react";
import s from './AddPost.module.css';

// let addPostActionCreator = () => {
//   return {
//     type: 'ADD-POST'
//   }
// }

const AddPost = (props) => {
  let addPost = () => {
    let message = newPostElement.current.value; 
    props.dispatch({
      type: 'ADD-POST',
      message: message,
    })
  }

  let onPostChange = () => {
    
  }

  let newPostElement = React.createRef();

  return (
    <div className={s.add_post_wrapper}>
      <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} name="" id="" cols="30" rows="5" placeholder="Опубликуйте что-нибудь"></textarea>
      <button onClick={ addPost }>Add post</button>
    </div>  
  )
}
export default AddPost;
