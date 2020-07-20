import React from "react";
import s from './AddPost.module.css';
import { addPostCreator, updateNewPostCreator} from '../../../../redux/state';

const AddPost = (props) => {
  let addPost = () => {
  props.dispatch(addPostCreator())
  }
  
  let onPostChange = () => {
    let newPostText = newPostElement.current.value;
    let action = updateNewPostCreator(newPostText);
    props.dispatch(action);
  }

  let newPostElement = React.createRef();

  return (
    <div className={s.add_post_wrapper}>
      <textarea className={s.textarea} ref={newPostElement} onChange={ onPostChange } value={props.newPostText} name="" id="" cols="30" rows="5" placeholder="Опубликуйте что-нибудь"></textarea>
      <button className={s.button} onClick={ addPost }>Add post</button>
    </div>  
  )
}
export default AddPost;
