import React from "react";
import s from './AddPost.module.css';
import {connect} from "react-redux";
import {addPost} from "../../../redux/profileReducer";


const AddPost = React.memo(({handleSubmit, pristine, reset, submitting, addPost}) => {

    let addNewPost = (formData) => {
        addPost(formData.newPostText);
        reset("addPost");
    }

    return (
        <div className={s.wrapper}>
            {/*<form onSubmit={handleSubmit(addNewPost)}>*/}
            <form>
                <textarea className={s.textarea} name="newPostText" cols="30" rows="7" placeholder="Enter somesing..."/>
                <button className={s.button} type="submit" disabled={pristine || submitting}>Add post</button>
            </form>
        </div>
    )
})


const mapStateToProps = (state) => ({
    newPostText: state.profilePage.newPostText,
});

export default connect(mapStateToProps, {addPost})(AddPost);

