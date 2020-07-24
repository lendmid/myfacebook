import React from "react";
import s from './DialogHeader.module.css';


const DialogHeader = (props) => {
    return (
        <div className={s.dialog_header}>
            <div className={s.main_information}>
                <img src={props.store.getState().messagesPage.messagesData[0].img} alt="" />
                <span>{props.store.getState().messagesPage.messagesData[0].name}</span>
            </div>
        </div>
    )
}

export default DialogHeader;
