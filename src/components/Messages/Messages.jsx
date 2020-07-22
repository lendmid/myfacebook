import React from "react";
import s from './Messages.module.css';
import { NavLink } from "react-router-dom";
import LastMessage from './LastMessage/LastMessage';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/messagesReducer';

const LastMessageItem = (props) => {
  let path = "/messages/" + props.id;
  return (
    <li>
      <NavLink to={path}>
        <LastMessage message={props.message} date={props.date} name={props.name} img={props.img} />
      </NavLink>
    </li>
  )
}

const MessageItem = (props) => {
  return (
    <Message message={props.message} />
  )
}

const Messages = (props) => {
  let lastMessages = props.messagesPage.messagesData.map(lastM => <LastMessageItem id={lastM.id} name={lastM.name} img={lastM.img} date={lastM.date} message={lastM.message} />)
  // let historyMessages = props.messagesPage.historyMessages.map( m => <Message message={m.message} />);
  // let historyMessages = props.messagesPage.historyMessages.map(obj => obj.message);
  let historyMessages = props.messagesPage.historyMessages.map(message => <MessageItem message={message} />);
  let newMessageText = props.messagesPage.newMessageText;

  let sendMessage = () => {
    props.dispatch(sendMessageCreator())
  }
  let newMessageTextChange = (e) => {
    let newMessageText = e.target.value;
    let action = updateNewMessageTextCreator(newMessageText);
    props.dispatch(action);
  }

  return (
    <div className={s.wrapper}>
      <aside className={s.last_messages_wrapper}>
        <div className={s.last_messages_header}>
          <h1>Чаты</h1>
        </div>
        <ul className={s.last_messages_list}> 
            {lastMessages}
        </ul>
      </aside>
      <div className={s.dialog_wrapper}>
        <div className={s.dialog_header}>
          <div className={s.main_information}>
            <img src={props.messagesPage.messagesData[0].img} alt=""/>
            <span>{props.messagesPage.messagesData[0].name}</span>
          </div>
        </div>
        <div className={s.history_wrapper}>
          {historyMessages}
        </div>
        <div className={s.send_wrapper}>
          <input className={s.input} value={newMessageText} onChange={newMessageTextChange} placeholder="Введите сообщение..."></input>
          {/* <a href="#1" onClick={sendMessage}><img src="https://image.flaticon.com/icons/svg/2948/2948197.svg" alt="send" className={s.send} /></a> */}
          <button onClick={sendMessage} className={s.send}></button>
        </div>
      </div>
    </div>
  )
}
export default Messages;
