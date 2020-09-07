import {addPostCreator} from '../../../../redux/profileReducer';
import AddPost from './AddPost';
import {connect} from "react-redux";
import {compose} from "redux";


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

const AddPostConrainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    
    )(AddPost)



// export default reduxForm({
//     form: 'addPost',
//     onSubmit: values => {
//         debugger
//         console.log('sended', values)},
//     // onSubmit: formData => AddPost.addNewPost(formData.newPostText)
// })(AddPost);


export default AddPostConrainer;
