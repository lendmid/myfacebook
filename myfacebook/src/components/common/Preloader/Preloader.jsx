import React from "react";
import preloader from "../../../assets/images/Preloader.svg"
import s from './Preloader.module.css';

let Preloader = () => {
    return (
        <div className={s.wrapper}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}

export default Preloader;
