import React from "react";
import s from './SendMessage.module.css';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../../redux/messagesReducer";

const SendMessage = (props) => {
    
    let newMessageText = props.newMessageText;
    
    let sendMessage = () => {
        props.sendMessageCreator();
    }
    let newMessageTextChange = (e) => {
        let newMessageText = e.target.value;
        let action = updateNewMessageTextCreator(newMessageText);
        props.dispatch(action);
    }
    
    return (
      <div className={s.send_wrapper}>
          <input className={s.input} value={newMessageText} onChange={newMessageTextChange}
                 placeholder="Введите сообщение..."></input>
          {/*<a href="#1" onClick={sendMessage}><img src="https://image.flaticon.com/icons/svg/2948/2948197.svg" alt="send" className={s.send} /></a>*/}
          <button onClick={sendMessage} className={s.send}></button>
      </div>
  )
}
export default SendMessage;
