import React from "react";
import s from './LastMessages.module.css';


const LastMessages = ({lastMessages}) => {
    
    
    return (
        <div className={s.last_messages_wrapper}>
            <div className={s.last_messages_header}>
                <h1>Чаты</h1>
            </div>
            <ul className={s.last_messages_list}>
                {lastMessages}
            </ul>
        </div>
    )
}

export default LastMessages;
