import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import Dialog from './Dialog/Dialog';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <li>
      <NavLink to={path}>
        <Dialog message={props.message} date={props.date} name={props.name} img={props.img} />
      </NavLink>
    </li>
  )
}

const Dialogs = (props) => {
  let dialogs = props.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} img={dialog.img} date={dialog.date} message={dialog.message} /> )

  return (
    <div className={s.wrapper}>
      <div className={s.dialogs_wrapper}>
        <div className={s.dialogs_header}>
          <h1>Чаты</h1>
        </div>
        <div className={s.dialogs_list}>
          <ul className={s.dialogs}> 
              {dialogs}
          </ul>
        </div>
      </div>
      <div className={s.dialog_wrapper}>
        <div className={s.send_wrapper}>
          <textarea className={s.textarea} name="" id="" cols="30" rows="1" placeholder="Введите сообщение"></textarea>
          <button className={s.button}>Send</button>
        </div>
      </div>
    </div>
  )
}
export default Dialogs;
