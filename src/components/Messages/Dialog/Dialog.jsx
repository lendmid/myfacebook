import React from "react";
import s from './Dialog.module.css';
import SendMessageContainer from "./SendMessage/SendMessageContainer";
import DialogHistoryContainer from "./DialogHistory/DialogHistoryContainer";
import DialogHeaderContainer from "./DialogHeader/DialogHeaderContainer";


const Dialog = (props) => {
    return (
        <div className={s.dialog_wrapper}>
            <DialogHeaderContainer store={props.store} />
            <DialogHistoryContainer store={props.store} />
            <SendMessageContainer store={props.store} />
        </div>
    )
}

export default Dialog;
