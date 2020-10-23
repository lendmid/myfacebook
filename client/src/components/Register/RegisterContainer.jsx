import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form"
import {logIn} from "../../redux/authReducer";
import Register from "./Register";


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.authorizedUserId,
});

const RegisterContainer = compose(
    connect(mapStateToProps, {logIn}),
    reduxForm({
        form: 'register',
    }),
)(Register);

export default RegisterContainer;
