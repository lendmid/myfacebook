import React from "react"
import {Field} from "redux-form"
import {Link, Redirect} from "react-router-dom";
import s from './LogIn.module.css';
import {required} from "../../utils/validators/validators";
import {InputLogIn} from "../common/FormValidator/FormValidator";
import logo from "../../assets/images/logo.svg";
import hh from "../../assets/images/hh.png";
import github from "../../assets/images/github.png";


const LogIn = React.memo(({handleSubmit, pristine, submitting, error, logIn, isAuth, authorizedUserId}) => {
    
    if (isAuth) return <Redirect to={`/profile/${authorizedUserId}`} />;
    
    let tryLogIn = (formData) => {
        logIn(formData.email, formData.password, true);
    };
    
    return (
        <div className={s.wrapper}>
            <div className={s.wrapper_description}>
                 <Link to={"/login"}><img src={logo} alt="logo" className={s.logo} /></Link>
                <div>
                    <h3 className={s.about_title}>About project</h3>
                    <p className={s.about_text}>
                        What is this? It is my project whole wrote with library React, Redux and with other library's. Now project on stage develop and active development. <br /><br />
                        You can enter in my project using data: <br />
                        <b>Email:</b> free@samuraijs.com <br />
                        <b>Password:</b> free <br /> <br />
                        Today functional in this project work through other API. In the future I will writing my API. <br />
                        Thank you for your interest to my work and your time!
                    </p>
                </div>
                <div className={s.links}>
                    <span className={s.made_by}>made by <strong>Dima Doroshenko</strong></span>
                    <a href="https://hh.ru/applicant/resumes/view?resume=82f7c7b9ff08590b540039ed1f6d6a69644645"><img src={hh} alt="headhunter logo" className={s.portfolio} /></a>
                    <a href="https://github.com/lendmid/myfacebook"><img src={github} alt="github logo" className={s.portfolio} /></a>
                </div>
            </div>
            
            <form onSubmit={handleSubmit(tryLogIn)} className={`${s.login} ${error ? s.error : ""}`}>
                <Field component={InputLogIn} type="email"
                       placeholder="Email"
                       name="email"
                       validate={[required]}
                       className={s.input} />
                <Field component={InputLogIn} type="password"
                       placeholder="Password"
                       name="password"
                       validate={[required]}
                       className={s.input}
                       autoComplete="on" />
                <button type="submit" disabled={pristine || submitting} className={s.button}>Log in</button>
                {error && <span className={s.error_message}>{error}</span>}
                <Link to={"/register"} className={s.button + " " + s.button_register}>Register</Link>
            </form>
    
            <div className={s.footer}>
                <span className={s.myfacebook}>myfacebook © 2020</span>
            </div>
                
        </div>
    )
});

export default LogIn;
