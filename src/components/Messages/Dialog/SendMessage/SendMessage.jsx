import React from "react";
import s from './SendMessage.module.css';
import {Field, reduxForm} from "redux-form"
import {InputMessagesPage} from "../../../common/FormValidator/FormValidator";
import {minLenghtCreator, required} from "../../../../utils/validators/validators";


let minLenght1 = minLenghtCreator(1);

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
            <Field component={InputMessagesPage} className={s.input} name="newMessageText" placeholder="Enter somesing..." validate={[required, minLenght1]}></Field>
            <button className={s.send}></button>
        </form>
    )
}

let SendMessageFormRedux = reduxForm({form: 'sendMessage'})(SendMessageForm)

export default SendMessage;
