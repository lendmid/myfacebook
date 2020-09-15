import React from "react";
import s from './Dialog.module.css';
import SendMessageContainer from "./SendMessage/SendMessageContainer";
import DialogHistoryContainer from "./DialogHistory/DialogHistoryContainer";
import DialogHeaderContainer from "./DialogHeader/DialogHeaderContainer";


const Dialog =  React.memo(() => {
    return (
        <div className={s.dialog_wrapper}>
            <DialogHeaderContainer />
            <DialogHistoryContainer />
            <SendMessageContainer />
        </div>
    )
})

export default Dialog;
