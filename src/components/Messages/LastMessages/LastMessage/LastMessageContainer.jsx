import React from "react";
import s from './LastMessage.module.css';
import {NavLink} from "react-router-dom";

const LastMessageItem = (props) => {
    let path = "/messages/" + props.id;
    return (
        <li>
            <NavLink to={path}>
                <LastMessage message={props.message} date={props.date} name={props.name} img={props.img}/>
            </NavLink>
        </li>
    )
}

const LastMessage = (props) => {
  return (
    <div className={s.last_message_wrapper}>
      <img src={props.img} alt="avatar" className={s.avatar} />
      <div className={s.name}>
        <span>{props.name}</span>
      </div>
      <div className={s.message}>
        <div className={s.last_message}>
          <span>{props.message}</span>
        </div>
        <div className={s.date}>
          <span>{props.date}</span>
        </div>
      </div>
    </div> 
  )
}
export default LastMessage;
