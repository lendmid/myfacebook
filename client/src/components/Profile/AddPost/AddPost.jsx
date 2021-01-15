import React from "react";
import s from './AddPost.module.css';
import {connect} from "react-redux";
import {addPost} from "../../../redux/profileReducer";
import useValidation from "./useValidation";


const AddPost = React.memo(({addPost}) => {

    const {handleChange, handleSubmit, values, clientErrors, isLoading} = useValidation(addPost);

    // let addNewPost = (formData) => {
    //     addPost(formData.newPostText);
    //     reset("addPost");
    // }

    return (
        <div className={s.wrapper}>
            <form onSubmit={handleSubmit}>
                <label className={s.label}>
                    Creation publication
                    <textarea
                        className={s.textarea}
                        name="newPostText"
                        value={values.newPostText}
                        onChange={handleChange}
                        cols="30"
                        rows="7"
                        placeholder="Enter something..."
                        required
                    />
                </label>
                {clientErrors.newPostText && <span className={s.error}>{clientErrors.newPostText}</span>}
                <button className={s.button} type="submit" disabled={isLoading}>Add post</button>
            </form>
            {/*Задача организации, в особенности же новая модель организационной деятельности требуют от нас анализа систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом представляет собой интересный эксперимент проверки систем массового участия.*/}
        </div>
    )
})


const mapStateToProps = (state) => ({
    newPostText: state.profilePage.newPostText,
});

export default connect(mapStateToProps, {addPost})(AddPost);

