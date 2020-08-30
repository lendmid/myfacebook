import React from "react";
import s from './Message.module.css';
import avatar_1 from "./../../../../../assets/images/avatar_1.png";



const LastMessage = (props) => {
    return (
        <div className={s.message_wrapper}>
            <img src={avatar_1} alt="avatar"
                 className={s.avatar} />
            <div className={s.message}>
                {props.message}
            </div>
        </div>
    )
}

export default LastMessage;
