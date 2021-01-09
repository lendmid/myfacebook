import React from "react";
import useValidation from "./useValidation";

import s from './LogIn.module.css';
import {Link} from "react-router-dom";

import logo from "../../assets/images/logo.png";
import hh from "../../assets/images/hh.png";
import github from "../../assets/images/github.png";
import {connect} from "react-redux";
import {logIn} from "../../redux/authReducer";


const LogIn = React.memo(({logIn}) => {

    const { handleChange, handleSubmit, values, clientErrors } = useValidation(logIn);

    return (
        <div className={s.wrapper}>
            <div className={s.wrapper_description}>
                <Link to={"/login"}><img src={logo} alt="logo" className={s.logo} /></Link>

                <h3 className={s.about_title}>About project</h3>
                <p className={s.about_text}>
                    What is this? It is my project whole wrote with library React, Redux and with other library's. Now project on stage develop. <br /><br />
                    You can enter in my project using data: <br />
                    <b>Email:</b> free@samuraijs.com <br />
                    <b>Password:</b> free <br /> <br />
                    Today functional in this project work through other API. My API in stage develop. <br />
                    Thank you for your interest to my work and your time!
                </p>

                <div className={s.links}>
                    <span className={s.made_by}>made by <strong>Dimitry Doroshenko</strong></span>
                    <a href="https://hh.ru/applicant/resumes/view?resume=82f7c7b9ff08590b540039ed1f6d6a69644645"><img src={hh} alt="headhunter logo" className={s.portfolio} /></a>
                    <a href="https://github.com/lendmid/myfacebook"><img src={github} alt="github logo" className={s.portfolio} /></a>
                </div>
            </div>
            
            <form className={`${s.login}`} onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Your email"
                    name="email"
                    className={s.input}
                    value={values.email}
                    onChange={handleChange}
                    autoComplete="on"
                    required
                />
                {clientErrors.email && <span className={s.error}>{clientErrors.email}</span>}
                <input
                    type="password"
                    placeholder="Your password"
                    name="password"
                    className={s.input}
                    value={values.password}
                    onChange={handleChange}
                    autoComplete="on"
                    required
                />
                {clientErrors.password && <span className={s.error}>{clientErrors.password}</span>}
                <button type="submit"
                        className={s.button}
                        // disabled={loading}
                >Log in</button>
                <Link to={"/register"} className={s.button + " " + s.button_register}>Register</Link>
            </form>
    
            <div className={s.footer}>
                <span className={s.myfacebook}>myfacebook © 2020</span>
            </div>
        </div>
    )
});

export default connect(null, {logIn})(LogIn);

