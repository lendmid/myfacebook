import React from "react";
import {Link} from "react-router-dom";
import s from './LastMessage.module.css';


const LastMessage =  React.memo(({img, name, message, date, id}) => {
    return (
        <li>
            <Link to={`/messages/${id}`} className={s.last_message_wrapper}>
                <img src={img} alt="avatar" className={s.avatar} />
                <div className={s.name}>
                    <span>{name}</span>
                </div>
                <div className={s.message}>
                    <div className={s.last_message}>
                        <span>{message}</span>
                    </div>
                    <div className={s.date}>
                        <span>{date}</span>
                    </div>
                </div>
            </Link>
        </li>
    )
})

export default LastMessage;
