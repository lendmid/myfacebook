import React from "react";
import s from './AddPost.module.css';
import {Field} from "redux-form"
import {required} from "../../../utils/validators/validators";
import {TextAreaProfilePage} from "../../common/FormValidator/FormValidator";


const AddPost = React.memo(({handleSubmit, pristine, reset, submitting, addPost}) => {
    
    let addNewPost = (formData) => {
        addPost(formData.newPostText);
        reset("addPost");
    }
    
    return (
        <div className={s.wrapper}>
            <form onSubmit={handleSubmit(addNewPost)}>
                <Field component={TextAreaProfilePage} className={s.textarea} name="newPostText" cols="30" rows="7" placeholder="Enter somesing..." validate={[required]}></Field>
                <button className={s.button} type="submit" disabled={pristine || submitting}>Add post</button>
            </form>
        </div>
    )
})

export default AddPost;
