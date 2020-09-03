import React from "react";
import s from './AddPost.module.css';
import {Field, reduxForm} from "redux-form"
import {minLenghtCreator, required} from "../../../../utils/validators/validators";
import {TextAreaProfilePage} from "../../../common/FormValidator/FormValidator";


let minLenght1 = minLenghtCreator(1)

let AddPost = (props) => {
    let addNewPost = (formData) => {
        props.addPost(formData.newPostText);
    }
    
    return (
        <div className={s.add_post_wrapper}>
            <AddPostFormRedux onSubmit={addNewPost} />
        </div>
    )
}

let AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextAreaProfilePage} className={s.textarea} name="newPostText" cols="30" rows="7" placeholder="Enter somesing..." validate={[required, minLenght1]}></Field>
            <button className={s.button}>Add post</button>
        </form>
    )
}

let AddPostFormRedux = reduxForm({form: 'addPost'})(AddPostForm)

export default AddPost;
