import React, {useEffect, useState} from "react";
import {Link, Redirect} from "react-router-dom";

import {useHttp} from "../../hooks/http.hook";
import s from './Register.module.css';

import logo from "../../assets/images/logo.svg";
import hh from "../../assets/images/hh.png";
import github from "../../assets/images/github.png";
import {useMessage} from "../../hooks/message.hook";


const Register = React.memo(({isAuth, authorizedUserId}) => {
    const message = useMessage();
    const {loading, error, request, clearError} = useHttp();
    const [form, setForm] = useState({email: '', password: '', firstName: '', lastName: ''});
    
    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);
    
    
    if (isAuth) return <Redirect to={`/profile/${authorizedUserId}`} />;
    
    const changeHandler = (event) => setForm({...form, [event.target.name]: event.target.value});
    
    const tryRegister = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            console.log('Data', data);
            message(data.message);
        } catch (e) {}
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
                    <a href="https://hh.ru/applicant/resumes/view?resume=82f7c7b9ff08590b540039ed1f6d6a69644645"><img src={hh} alt="github logo" className={s.portfolio} /></a>
                    <a href="https://github.com/lendmid"><img src={github} alt="headhunter logo" className={s.portfolio} /></a>
                </div>
            </div>
            
            <form className={s.register} >
                <input type="email"
                       placeholder="Your email"
                       name="email"
                       className={s.input}
                       disabled={loading}
                       autoComplete="off"
                       readOnly
                       onFocus={(e) => e.currentTarget.removeAttribute('readonly')}
                       onChange={changeHandler} />
                <input type="password"
                       placeholder="Your password"
                       name="password"
                       className={s.input}
                       disabled={loading}
                       autoComplete="off"
                       readOnly
                       onFocus={(e) => e.currentTarget.removeAttribute('readonly')}
                       onChange={changeHandler} />
                <input type="text"
                       placeholder="First name"
                       name="firstName"
                       className={s.input}
                       disabled={loading}
                       autoComplete="off"
                       readOnly
                       onFocus={(e) => e.currentTarget.removeAttribute('readonly')}
                       onChange={changeHandler} />
                <input type="text"
                       placeholder="Last name"
                       name="lastName"
                       className={s.input}
                       disabled={loading}
                       autoComplete="off"
                       readOnly
                       onFocus={(e) => e.currentTarget.removeAttribute('readonly')}
                       onChange={changeHandler} />
                <button type="button" className={s.button} onClick={tryRegister}>Register</button>
                <Link to={"/login"} className={s.button + " " + s.button_login}>Return to login page</Link>
            </form>

            <div className={s.footer}>
                <span className={s.myfacebook}>myfacebook © 2020</span>
            </div>
                
        </div>
    )
});

export default Register;
