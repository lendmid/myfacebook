import React from "react";
import s from './Man.module.css';

const Man = (props) => {
  return (
    <div className={s.post_wrapper}>
      <img src="https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-9.png" alt="avatar" />
      <div className={s.last_message}>
        <span className={s.name}>
          {props.name}
        </span>
        <span className={s.message}>
          {props.message}
          {props.date}
        </span>
      </div>
    </div>
  )
}
export default Man;
