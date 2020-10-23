import React from "react"
import {Field} from "redux-form"
import {Redirect} from "react-router-dom";
import s from './Register.module.css';
import {required} from "../../utils/validators/validators";
import {InputLogIn} from "../common/FormValidator/FormValidator";
import logo from "../../assets/images/logo.svg";
import hh from "../../assets/images/hh.png";
import github from "../../assets/images/github.png";
import {useHttp} from "../../hooks/http.hook";


const Register = React.memo(({handleSubmit, pristine, submitting, error, logIn, isAuth, authorizedUserId}) => {
    const {loading, newAPIError, request} = useHttp();
    
    if (isAuth) return <Redirect to={`/profile/${authorizedUserId}`} />;
    
    let tryLogIn = (formData) => {
        logIn(formData.email, formData.password, true);
    };
    
    let tryRegister = async (formData) => {
        debugger
        const data = await request('/api/auth/register', 'POST', {...formData});
        // alert(`Unfortunately now registration do not work. It function will be work soon`);
    };
    
    // const removeFocus = (event) => {
    //     debugger
    //     this.removeAttribute('readonly')
    // }
    
    return (
        <div className={s.wrapper}>
            <div className={s.wrapper_description}>
                <a href="#"><img src={logo} alt="logo" className={s.logo} /></a>
                <div>
                    <h3 className={s.about_title}>About project</h3>
                    <p className={s.about_text}>
                        What is this? It is my project whole wrote with library React, Redux and with other small library's. Now project on stage develop and active development. <br /><br />
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
            
            <form className={s.register} onSubmit={handleSubmit(tryRegister)} >
                <input type="email"
                       placeholder="Your email"
                       name="emailRegister"
                       className={s.input}
                       autoComplete="new-password"
                       disabled={loading} />
                <input type="password"
                       placeholder="Your password"
                       name="passwordRegister"
                       className={s.input}
                       autoComplete="new-password"
                       disabled={loading} />
                <input type="text"
                       placeholder="First name"
                       name="firstName"
                       className={s.input}
                       autoComplete="new-password"
                       disabled={loading} />
                <input type="text"
                       placeholder="Last name"
                       name="lastName"
                       className={s.input}
                       autoComplete="new-password"
                       disabled={loading}/>
                <button className={s.button + " " + s.button_register}>Register</button>
                {/*{error && <span className={s.error_message}>{error}</span>}*/}
            </form>

            <div className={s.footer}>
                <span className={s.myfacebook}>myfacebook © 2020</span>
            </div>
                
        </div>
    )
});

export default Register;
