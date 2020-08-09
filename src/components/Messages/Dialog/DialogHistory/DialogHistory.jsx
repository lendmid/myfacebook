import React from "react";
import s from './DialogHistory.module.css';


const DialogHistory = (props) => {
    return (
        <div className={s.history_wrapper}>
            {props.historyMessages}
        </div>
    )
}

export default DialogHistory;
