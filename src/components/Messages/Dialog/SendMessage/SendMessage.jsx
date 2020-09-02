import React from "react";
import s from './SendMessage.module.css';


const SendMessage = (props) => {
    let sendMessage = () => props.sendMessage();
    let newMessageTextChange = () => {
        let newMessageText = newMessageElement.current.value;
        props.updateNewMessageText(newMessageText);
    }
    
    let newMessageElement = React.createRef();
    return (
        <div className={s.send_wrapper}>
            <input className={s.input} ref={newMessageElement} value={props.newMessageText}
                   onChange={newMessageTextChange}
                   placeholder="Введите сообщение..."></input>
            <button onClick={sendMessage} className={s.send}></button>
        </div>
    )
}

export default SendMessage;
