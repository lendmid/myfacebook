import React from "react"
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form"
import {InputLoginPage} from "../common/FormValidator/FormValidator";


let Login = (props) => {
    let onSubmit = (formData) => {
        console.log(formData);
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
            <Field component={InputLoginPage} type="email" placeholder="Email" name="login" className={s.input} />
            <Field component={InputLoginPage} type="password" placeholder="Password" name="password" className={s.input} />
            <button className={s.button}>Sign in</button>
            <div className={s.line}></div>
            <button className={`${s.button} ${s.sign_up}`}>Sign up</button>
        </form>
    )
}

let LoginFormRedux = reduxForm({form: 'login'})(LoginForm)

export default Login;
