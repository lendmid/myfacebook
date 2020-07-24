import React from "react";
import s from './Messages.module.css';
import LastMessages from "./LastMessages/LastMessages";
import Dialog from "./Dialog/Dialog";


const Messages = (props) => {
    return (
        <div className={s.wrapper}>
            <LastMessages store={props.store}/>
            <Dialog store={props.store}/>
        </div>
    )
}

export default Messages;
