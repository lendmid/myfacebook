import React from "react";
import s from './AddPost.module.css';
import {connect} from "react-redux";
import {addPost} from "../../../redux/profile.reducer";
import useValidation from "./useValidation";


interface IProps {
    addPost(text: string): void
}

const AddPost = React.memo(({addPost}: IProps) => {

    const {handleChange, handleSubmit, values, clientErrors} = useValidation(addPost);

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
                        cols={30}
                        rows={7}
                        placeholder="Enter something..."
                    />
                </label>
                {clientErrors.newPostText.length > 0 && <span className={s.error}>{clientErrors.newPostText}</span>}
                <button className={s.add_post} type="submit">Add post</button>
            </form>
        </div>
    )
})


export default connect(null, {addPost})(AddPost);

