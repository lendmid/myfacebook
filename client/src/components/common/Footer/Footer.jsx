import React from "react";
import s from './Footer.module.css';


const Footer = React.memo(() => {

    return (
        <div className={s.footer}>
            <span className={s.myfacebook}>myfacebook © 2020</span>
        </div>
    )
});

export default Footer;
