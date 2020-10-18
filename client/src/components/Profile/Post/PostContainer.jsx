import Post from "./Post";
import {connect} from "react-redux";
import {deletePost} from "../../../redux/profileReducer";


const PostConrainer = connect(null, {deletePostThunk: deletePost})(Post);

export default PostConrainer;
