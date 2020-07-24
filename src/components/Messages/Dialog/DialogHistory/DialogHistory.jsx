import React from "react";
import s from './DialogHistory.module.css';
import Message from "./Message/Message";


const MessageItem = (props) => {
    return (
        <Message message={props.message} />
    )
}

const DialogHistory = (props) => {
    let state = props.store.getState();
    let historyMessages = state.messagesPage.historyMessages.map(message => <MessageItem message={message} />);
    
    return (
        <div className={s.history_wrapper}>
            {historyMessages}
        </div>
    )
}

export default DialogHistory;
