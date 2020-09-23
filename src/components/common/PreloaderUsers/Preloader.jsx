import React from "react";
import preloader from "../../../assets/images/Preloader.svg"
import s from './PreloaderUsers.module.css';

let PreloaderUsers = (props) => {
    return (
        <div className={s.wrapper}>
            <img src={preloader} alt="preloader" />
        </div>
    )
}

export default PreloaderUsers;