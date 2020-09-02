import React from "react";
import s from './SendMessage.module.css';
import {Field, reduxForm} from "redux-form"


const SendMessage = (props) => {
    let sendMessage = (formData) => {
        props.sendMessage(formData.newMessageText);
    }
    return (
        <div>
            <SendMessageFormRedux onSubmit={sendMessage}/>
        </div>
    )
}

let SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.send_wrapper}>
            <Field component="input" className={s.input} name="newMessageText" placeholder="Enter somesing"></Field>
            <button className={s.send}></button>
        </form>
    )
}

let SendMessageFormRedux = reduxForm({form: 'sendMessage'})(SendMessageForm)

export default SendMessage;
