import React from "react";
import s from './Dialog.module.css';
import DialogHeader from "./DialogHeader/DialogHeader";
import SendMessageContainer from "./SendMessage/SendMessageContainer";
import DialogHistory from "./DialogHistory/DialogHistory";


const Dialog = (props) => {
    return (
        <div className={s.dialog_wrapper}>
            <DialogHeader store={props.store} />
            <DialogHistory store={props.store} />
            <SendMessageContainer store={props.store} />
        </div>
    )
}

export default Dialog;
