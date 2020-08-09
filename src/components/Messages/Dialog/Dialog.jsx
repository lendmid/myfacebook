import React from "react";
import s from './Dialog.module.css';
import DialogHeader from "./DialogHeader/DialogHeader";
import SendMessageContainer from "./SendMessage/SendMessageContainer";
import DialogHistoryContainer from "./DialogHistory/DialogHistoryContainer";


const Dialog = (props) => {
    return (
        <div className={s.dialog_wrapper}>
            <DialogHeader store={props.store} />
            <DialogHistoryContainer store={props.store} />
            <SendMessageContainer store={props.store} />
        </div>
    )
}

export default Dialog;
