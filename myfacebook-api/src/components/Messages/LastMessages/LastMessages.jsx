import React from "react";
import s from './LastMessages.module.css';


const LastMessages = React.memo(({lastMessages}) => {
    return (
        <div className={s.last_messages_wrapper}>
            <div className={s.last_messages_header}>
                <h1>Чаты</h1>
            </div>
            <ul className={s.last_messages_list} onClick={(event) => {if (event.target.tagName !== "UL") alert("History with this user will be available soon")}}>
                {lastMessages}
            </ul>
        </div>
    )
})

export default LastMessages;
