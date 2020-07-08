import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import Chat from './Chat/Chat';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <li>
      <NavLink to={path}>
        <Chat message={props.message} date={props.date} name={props.name} img={props.img} />
      </NavLink>
    </li>
  )
}

const Dialogs = (props) => {
  let chatElement = props.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} img={dialog.img} date={dialog.date} message={dialog.message} /> )

  return (
    <div className={s.wrapper}>
      <div className={s.chats_wrapper}>
        <div className={s.chats_header}>
          <h1>Чаты</h1>
        </div>
      <div className={s.chats_list}>
        <ul className={s.chats}> 
            {chatElement}
        </ul>
        </div>
      </div>
      <div className={s.chat}>
        <div className={s.input_string}></div>
      </div>
    </div>
  )
}
export default Dialogs;
