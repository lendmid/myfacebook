import Post from "./Post";
import {connect} from "react-redux";
import {deletePostThunk} from "../../../redux/profileReducer";


const PostConrainer = connect(null, {deletePostThunk})(Post);

export default PostConrainer;
