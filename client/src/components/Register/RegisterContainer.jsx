import {connect} from "react-redux";
import Register from "./Register";


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.authorizedUserId,
});

const RegisterContainer = connect(mapStateToProps)(Register);

export default RegisterContainer;
