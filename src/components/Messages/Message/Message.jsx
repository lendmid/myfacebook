import React from "react";
import s from './Message.module.css';

const LastMessage = (props) => {
  return (
    <div className={s.message_wrapper}>
      <img src="https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-26.png" alt="avatar" className={s.avatar} />
      <div className={s.message}>
        <div>{props.message}</div>
      </div>
    </div> 
  )
}
export default LastMessage;
