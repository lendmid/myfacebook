import React from "react";
import s from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import LastMessagesContainer from "./LastMessages/LastMessagesContainer";


const Messages = (props) => {
    return (
        <div className={s.wrapper}>
            <LastMessagesContainer store={props.store}/>
            <Dialog store={props.store}/>
        </div>
    )
}

export default Messages;
