import React from "react";
import s from './Man.module.css';

const Man = (props) => {
  return (
    <div className={s.post_wrapper}>
      <img src={props.img} alt="avatar" />
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
export default Man;
