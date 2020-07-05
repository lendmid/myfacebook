import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.chats_wrapper}>
        <div className={s.chats_header}>
          <h1>Чаты</h1>
        </div>
        <ul className={s.chats}>
          <li><NavLink to="/dialogs/1">1</NavLink></li>
          <li><NavLink to="/dialogs/2">2</NavLink></li>
          <li><NavLink to="/dialogs/3">3</NavLink></li>
          <li><NavLink to="/dialogs/4">4</NavLink></li>
          <li><NavLink to="/dialogs/5">5</NavLink></li>
        </ul>
      </div>
      <div className={s.chat}></div>
    </div>
  )
}
export default Dialogs;
