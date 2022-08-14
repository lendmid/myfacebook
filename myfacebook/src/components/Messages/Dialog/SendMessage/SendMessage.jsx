import React from "react";
import s from './SendMessage.module.css';
import {Field} from "redux-form"
import {InputMessagesPage} from "../../../common/FormValidator/FormValidator";


const SendMessage = React.memo(({handleSubmit, pristine, reset, submitting, sendMessage}) => {
    let sendNewMessage = (formData) => {
        sendMessage(formData.newMessageText);
        reset("sendMessage");
    }

    return (
        <div>
            <form onSubmit={handleSubmit(sendNewMessage)}
                  className={s.send_wrapper}>
                <Field component={InputMessagesPage} className={s.input} name="newMessageText"
                       placeholder="Enter somesing..."/>
                <button className={s.send} type="submit" disabled={pristine || submitting}/>
            </form>
        </div>
    )
})

export default SendMessage;
