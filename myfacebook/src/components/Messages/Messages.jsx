import React from "react";
import s from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import LastMessagesContainer from "./LastMessages/LastMessagesContainer";


const Messages = React.memo(() => {
    return (
        <div className={s.wrapper}>
            <LastMessagesContainer />
            <Dialog />
        </div>
    )
})

export default Messages;
