import {addPost} from '../../../redux/profileReducer';
import AddPost from './AddPost';
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form"


const mapStateToProps = (state) => ({
        newPostText: state.profilePage.newPostText,
});

const AddPostConrainer = compose(
    connect(mapStateToProps, {addPost}),
    reduxForm({
        form: 'addPost',
    })
)(AddPost);

export default AddPostConrainer;
