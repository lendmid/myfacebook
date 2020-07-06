import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import Man from './Man/Man';

const Dialogs = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.chats_wrapper}>
        <div className={s.chats_header}>
          <h1>Чаты</h1>
        </div>
      <div className={s.chats_list}>
        <ul className={s.chats}>
          <li><NavLink to="/dialogs/1"><Man message='Very hard' date="24 may" name="Alexandra Mikhailova"/></NavLink></li>
          <li><NavLink to="/dialogs/2">2</NavLink></li>
          <li><NavLink to="/dialogs/3">3</NavLink></li>
          <li><NavLink to="/dialogs/4">4</NavLink></li>
          <li><NavLink to="/dialogs/5">5</NavLink></li>
        </ul>
        </div>
      </div>
      <div className={s.chat}></div>
    </div>
  )
}
export default Dialogs;
