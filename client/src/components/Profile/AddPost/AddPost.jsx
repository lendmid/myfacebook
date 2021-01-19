import React from "react";
import s from './AddPost.module.css';
import {connect} from "react-redux";
import {addPost} from "../../../redux/profileReducer";
import useValidation from "./useValidation";


const AddPost = React.memo(({addPost}) => {

    const {handleChange, handleSubmit, values, clientErrors, isLoading} = useValidation(addPost);

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
                <button className={s.add_post} type="submit" disabled={isLoading}>Add post</button>
            </form>
        </div>
    )
})


const mapStateToProps = (state) => ({
    newPostText: state.profilePage.newPostText,
});

export default connect(mapStateToProps, {addPost})(AddPost);

