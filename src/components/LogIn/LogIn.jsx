import React from "react"
import s from './LogIn.module.css';
import {Field} from "redux-form"
import {InputLogIn} from "../common/FormValidator/FormValidator";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";


const LogIn = React.memo(({handleSubmit, pristine, submitting, error, logIn, isAuth, authorizedUserId}) => {
    if (isAuth) return <Redirect to={`/profile/${authorizedUserId}`} />;
    //refactoring: create registrationPage
    
    let registerForm = () => {
        alert(`    When you press ok, will onen site with registration form. You can only enter my project through this site, because so far this project is based on their API. In the future I will writing my API.
    After registration return on this window ang refresh page. You will be log in.
    My congratulations and thank you for you time!
    P.S. With a high probability new window will be block brauser. let the browser open the page or you can find the link in my github profile`)
        return <Redirect to={"https://social-network.samuraijs.com/signUp"} />
    }
    
    let tryLogIn = (formData) => {
        logIn(formData.email, formData.password, true);
    }
    
    return (
        <div className={s.wrapper}>
            <div className={s.wraper_description}>
            
            </div>
            <div className={s.wrapper_login}>
                <form onSubmit={handleSubmit(tryLogIn)} className={`${s.login} ${error ? s.error : ""}`}>
                    <Field component={InputLogIn} type="email" placeholder="Email" name="email" validate={[required]} className={s.input} />
                    <Field component={InputLogIn} type="password" placeholder="Password" name="password" validate={[required]} className={s.input} autoComplete="on" />
                    <button type="submit" disabled={pristine || submitting} className={s.button}>Log in</button>
                    {error ? <span className={s.error_message}>{error}</span> : ""}
                </form>
                {/*<div className={s.line}></div>*/}
                {/*<a href="https://social-network.samuraijs.com/signUp" className={`${s.button} ${s.register}`} onClick={registerForm} target="_blank" rel="noopener noreferrer">Register</a>*/}
            </div>
            <div className={s.wrapper_register}>
            
            </div>
            
            <div className={s.footer}>
            
            </div>
        </div>
    )
})

export default LogIn;
