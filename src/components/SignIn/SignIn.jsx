import React from "react"
import s from './SignIn.module.css';
import {Field, reduxForm} from "redux-form"
import {InputLoginPage} from "../common/FormValidator/FormValidator";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {signIn} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";


let SignIn = (props) => {
    let onSubmit = (formData) => {
        props.signIn(formData.email, formData.password, true)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div className={s.wrapper}>
            <LoginFormRedux onSubmit={onSubmit} />
        </div>
    )
}

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <Field component={InputLoginPage} type="email" placeholder="Email" name="email" validate={[required]} className={s.input} />
            <Field component={InputLoginPage} type="password" placeholder="Password" name="password" validate={[required]} className={s.input} />
            <button className={s.button}>Sign in</button>
            <div className={s.line}></div>
            <button className={`${s.button} ${s.sign_up}`}>Sign up</button>
        </form>
    )
}

let LoginFormRedux = reduxForm({form: 'signIn'})(LoginForm)

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {signIn})(SignIn);
