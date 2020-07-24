import React from "react";
import s from './AddPost.module.css';


const AddPost = (props) => {
    
    let addPost = () => props.addPost();
    let newPostTextChange = () => {
        let newPostText = newPostElement.current.value;
        props.updateNewPostText(newPostText);
    }
    
    let newPostElement = React.createRef();
    return (
        <div className={s.add_post_wrapper}>
            <textarea className={s.textarea} ref={newPostElement} onChange={newPostTextChange} value={props.newPostText}
                      name="" id="" cols="30" rows="5" placeholder="Опубликуйте что-нибудь"></textarea>
            <button className={s.button} onClick={addPost}>Add post</button>
        </div>
    )
}

export default AddPost;
