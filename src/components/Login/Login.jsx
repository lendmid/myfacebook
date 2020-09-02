import React from "react"
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form"


let Login = (props) => {
    let onSubmit = (formData) => {
        console.log(formData);
    }
    
    return (
        <div className={s.wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form} >
            <div>
                <label htmlFor="login">Login</label>
                <Field component="input" type="text" placeholder="Login" name="login" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field component="input" type="password" placeholder="Password" name="password" />
            </div>
            <div>
                <label htmlFor="checkbox">Remember me</label>
                <Field component="input" type="checkbox" name="checkbox" />
            </div>
            <button>Login</button>
        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;
