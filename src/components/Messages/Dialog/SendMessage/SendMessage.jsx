import React from "react";
import s from './SendMessage.module.css';
import {Field} from "redux-form"
import {InputMessagesPage} from "../../../common/FormValidator/FormValidator";
import {required} from "../../../../utils/validators/validators";


const SendMessage = (props) => {
    const {handleSubmit, pristine, reset, submitting, sendMessage} = props;
    
    let sendNewMessage = (formData) => {
        sendMessage(formData.newMessageText);
        reset("sendMessage");
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(sendNewMessage)}
                  className={s.send_wrapper}>
                <Field component={InputMessagesPage} className={s.input} name="newMessageText" placeholder="Enter somesing..." validate={[required]}></Field>
                <button className={s.send} type="submit" disabled={pristine || submitting}></button>
            </form>
        </div>
    )
}

export default SendMessage;
