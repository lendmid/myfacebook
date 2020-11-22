import {connect} from "react-redux";
import {logIn} from "../../redux/authReducer";
import LogIn from "./LogIn";


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.authorizedUserId,
});

const LogInContainer = connect(mapStateToProps, {logIn})(LogIn);

export default LogInContainer;
