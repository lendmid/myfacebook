import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import Man from './Man/Man';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <li>
      <NavLink
        to={path} />
        <Man
          message={props.message}
          date={props.date}
          name={props.name}
          img={props.img}
        />
    </li>
  )
}

const Dialogs = (props) => {

  let dialogElements = props.dialogsData
    .map(dialog => <DialogItem id={dialog.id} name={dialog.name} img={dialog.img} date={dialog.date} message={dialog.message} /> )

  return (
    <div className={s.wrapper}>
      <div className={s.chats_wrapper}>
        <div className={s.chats_header}>
          <h1>Чаты</h1>
        </div>
      <div className={s.chats_list}>
          <ul className={s.chats}> 
            {dialogElements}
        </ul>
        </div>
      </div>
      <div className={s.chat}></div>
    </div>
  )
}
export default Dialogs;
