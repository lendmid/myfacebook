import React from "react"
import s from './SignIn.module.css';
import {Field, reduxForm} from "redux-form"
import {InputSignIn} from "../common/FormValidator/FormValidator";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {signIn} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";


let SignIn = ({signIn, isAuth}) => {
    let onSubmit = (formData) => {
        signIn(formData.email, formData.password, true)
    }
    
    if (isAuth) return <Redirect to={"/profile"} />;
    
    return (
        <div className={s.wrapper}>
            <SignInFormRedux onSubmit={onSubmit} />
            <div className={s.line}></div>
            <button className={`${s.button} ${s.signUp}`}>Sign up</button>
        </div>
    )
}

let SignInForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={`${s.form} ${error ? s.error : ""}`}>
            <Field component={InputSignIn} type="email" placeholder="Email" name="email" validate={[required]} className={s.input} />
            <Field component={InputSignIn} type="password" placeholder="Password" name="password" validate={[required]} className={s.input} autoComplete="on" />
            <button className={s.button}>Sign in</button>
            {error ? <span className={s.error_message}>{error}</span> : ""}
        </form>
    )
}

let SignInFormRedux = reduxForm({form: 'signIn'})(SignInForm)

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {signIn})(SignIn);
