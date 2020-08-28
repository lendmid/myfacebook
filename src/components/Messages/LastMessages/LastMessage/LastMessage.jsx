import React from "react";
import s from './LastMessage.module.css';

// import avatar_5 from "../../../../assets/images/avatar_1.png";

const LastMessage = (props) => {
    return (
        <li className={s.last_message_wrapper}>
            <img src={props.img} alt="avatar" className={s.avatar} />
            <div className={s.name}>
                <span>{props.name}</span>
            </div>
            <div className={s.message}>
                <div className={s.last_message}>
                    <span>{props.message}</span>
                </div>
                <div className={s.date}>
                    <span>{props.date}</span>
                </div>
            </div>
        </li>
    )
}

export default LastMessage;
