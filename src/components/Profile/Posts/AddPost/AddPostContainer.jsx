import React from "react";
import {addPostCreator, updateNewPostTextCreator} from '../../../../redux/profileReducer';
import AddPost from './AddPost';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (newPostText) => dispatch(updateNewPostTextCreator(newPostText)),
        addPost: () => dispatch(addPostCreator())
    }
}
// суть операции в пробрасывании props'ов в компоненту
const AddPostConrainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostConrainer;
