import React from "react"
import s from './LogIn.module.css';
import {Field} from "redux-form"
import {InputLogIn} from "../common/FormValidator/FormValidator";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";


const LogIn = React.memo(({handleSubmit, pristine, submitting, error, logIn, isAuth}) => {
    if (isAuth) return <Redirect to={"/profile"} />;
    //refactoring: add id in redirect
    //refactoring: create registrationPage

    let tryLogIn = (formData) => {
        logIn(formData.email, formData.password, true);
    }
    
    return (
        <div className={s.wrapper}>
            <form onSubmit={handleSubmit(tryLogIn)} className={`${s.form} ${error ? s.error : ""}`}>
                <Field component={InputLogIn} type="email" placeholder="Email" name="email" validate={[required]} className={s.input} />
                <Field component={InputLogIn} type="password" placeholder="Password" name="password" validate={[required]} className={s.input} autoComplete="on" />
                <button type="submit" disabled={pristine || submitting} className={s.button}>Log in</button>
                {error ? <span className={s.error_message}>{error}</span> : ""}
            </form>
            <div className={s.line}></div>
            <button className={`${s.button} ${s.register}`}>Register</button>
        </div>
    )
})

export default LogIn;
