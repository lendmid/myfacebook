import React from "react";
import {addPostCreator, updateNewPostTextCreator} from '../../../../redux/profileReducer';
import AddPost from './AddPost';


const AddPostConrainer = (props) => {
    let state = props.store.getState();
    let newPostText = state.profilePage.newPostText;
    
    let addPost = () => props.store.dispatch(addPostCreator())
    let newPostTextChange = (newPostText) => {
        let action = updateNewPostTextCreator(newPostText);
        props.store.dispatch(action);
    }
    
    return (<AddPost updateNewPostText={newPostTextChange} addPost={addPost} newPostText={newPostText}/>)
}

export default AddPostConrainer;
