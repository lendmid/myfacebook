import {connect} from "react-redux";
import Register from "./Register";


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
});

const RegisterContainer = connect(mapStateToProps)(Register);

export default RegisterContainer;
