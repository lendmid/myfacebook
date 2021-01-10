import React from "react";
import s from './Description.module.css';
import {Link} from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import hh from "../../../assets/images/hh.png";
import github from "../../../assets/images/github.png";


const Description = React.memo(() => {

    return (
        <div className={s.wrapper_description}>
            <Link to={"/login"}><img src={logo} alt="logo" className={s.logo}/></Link>

            <h3 className={s.about_title}>About project</h3>
            <p className={s.about_text}>
                What is this? It is my project whole wrote with library React, Redux and with other library's.
                Now project on stage develop. <br/><br/>
                You can enter in my project using data: <br/>
                <b>Email:</b> free@samuraijs.com <br/>
                <b>Password:</b> free <br/> <br/>
                Today functional in this project work through other API. My API in stage develop. <br/>
                Thank you for your interest to my work and your time!
            </p>

            <div className={s.links}>
                <span className={s.made_by}>made by <strong>Dimitry Doroshenko</strong></span>
                <a href="https://hh.ru/applicant/resumes/view?resume=82f7c7b9ff08590b540039ed1f6d6a69644645">
                    <img src={hh} alt="headhunter logo" className={s.portfolio}/>
                </a>
                <a href="https://github.com/lendmid/myfacebook">
                    <img src={github} alt="github logo" className={s.portfolio}/>
                </a>
            </div>
        </div>
    )
});

export default Description;

