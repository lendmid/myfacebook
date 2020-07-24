import React from "react";
import s from './Dialog.module.css';
import LastMessages from "../LastMessages/LastMessages";
import Message from "../Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/messagesReducer";
import DialogHeader from "./DialogHeader/DialogHeader";
import SendMessage from "./SendMessage/SendMessage";


const MessageItem = (props) => {
    return (
        <Message message={props.message}/>
    )
}


const Dialog = (props) => {
    // let historyMessages = props.messagesPage.historyMessages.map(message => <MessageItem message={message}/>);
    
    return (
      <div className={s.dialog_wrapper}>
          <DialogHeader store={props.store}/>
          <div className={s.history_wrapper}>
              {/*{historyMessages}*/}
          </div>
          <SendMessage store={props.store}/>
      </div>
  )
}
export default Dialog;
