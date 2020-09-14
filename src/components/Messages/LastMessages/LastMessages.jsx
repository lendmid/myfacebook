import React from "react";
import s from './LastMessages.module.css';
import LastMessage from "./LastMessage/LastMessage";


const LastMessages = (props) => {
    
    let state = props.store.getState();
    let lastMessages = state.messagesPage.messagesData.map(lastM => <LastMessage key={lastM.id} name={lastM.name}
                                                                                 img={lastM.img} date={lastM.date}
                                                                                 message={lastM.message} />)
    
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
