import {addPostCreator} from '../../../../redux/profileReducer';
import AddPost from './AddPost';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => dispatch(addPostCreator(newPostText))
    }
}

const AddPostConrainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostConrainer;
