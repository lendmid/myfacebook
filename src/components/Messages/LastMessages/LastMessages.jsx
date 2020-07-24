import React from "react";
import s from './LastMessages.module.css';
import LastMessage from "./LastMessage/LastMessage";


const LastMessages = (props) => {
    
    let state = props.store.getState();
    let lastMessages = state.messagesPage.messagesData.map(lastM => <LastMessage id={lastM.id} name={lastM.name}
                                                                                 img={lastM.img} date={lastM.date}
                                                                                 message={lastM.message} />)
    
    return (
        <aside className={s.last_messages_wrapper}>
            <div className={s.last_messages_header}>
                <h1>Чаты</h1>
            </div>
            <ul className={s.last_messages_list}>
                {lastMessages}
            </ul>
        </aside>
    )
}

export default LastMessages;
