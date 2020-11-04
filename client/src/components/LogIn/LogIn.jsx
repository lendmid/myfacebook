import React, {useEffect, useState} from "react";
import {useMessage} from "../../hooks/message.hook";
import {useHttp} from "../../hooks/http.hook";

import s from './LogIn.module.css';
import {Link, Redirect} from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import hh from "../../assets/images/hh.png";
import github from "../../assets/images/github.png";


const LogIn = React.memo(({isAuth, authorizedUserId, logIn}) => {
    //refactoring: need will doing validation input
    const message = useMessage();
    const {loading, error, request, clearError} = useHttp();
    
    const [form, setForm] = useState({email: '', password: ''});
    const changeHandler = (event) => setForm({...form, [event.target.name]: event.target.value});
    
    useEffect(() => {clearError();}, [error, message, clearError]);
    
    if (isAuth) return <Redirect to={`/profile/${authorizedUserId}`} />;
    
    //refactoring: move action from here
    const tryLogIn = async () => {
        const data = await request('/api/auth/login', 'POST', {...form});
        console.log('Data', data);
        message(data.message);
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
            
            <form className={`${s.login} ${error ? s.error : ""}`}>
                <input type="email"
                       placeholder="Your email"
                       name="email"
                       className={s.input}
                       required
                       disabled={loading}
                       onChange={changeHandler} />
                <input type="password"
                       placeholder="Your password"
                       name="password"
                       className={s.input}
                       required
                       disabled={loading}
                       onChange={changeHandler} />
                <button type="button" onClick={tryLogIn} className={s.button}>Log in</button>
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