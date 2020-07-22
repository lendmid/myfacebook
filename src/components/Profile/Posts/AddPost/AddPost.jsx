import React from "react";
import s from './AddPost.module.css';
import { addPostCreator, updateNewPostTextCreator} from '../../../../redux/profileReducer';

const AddPost = (props) => {
  let addPost = () => {
  props.dispatch(addPostCreator())
  }
  
  let newPostTextChange = () => {
    let newPostText = newPostElement.current.value;
    let action = updateNewPostTextCreator(newPostText);
    props.dispatch(action);
  }

  let newPostElement = React.createRef();

  return (
    <div className={s.add_post_wrapper}>
      <textarea className={s.textarea} ref={newPostElement} onChange={ newPostTextChange } value={props.newPostText} name="" id="" cols="30" rows="5" placeholder="Опубликуйте что-нибудь"></textarea>
      <button className={s.button} onClick={ addPost }>Add post</button>
    </div>  
  )
}
export default AddPost;
