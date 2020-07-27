import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../../redux/messagesReducer";
import SendMessage from "./SendMessage";
import {connect} from "react-redux";


const SendMessageContainer = (props) => {
    let state = props.store.getState();
    let newMessageText = state.messagesPage.newMessageText;
    
    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let newMessageTextChange = (newMessageText) => {
        let action = updateNewMessageTextCreator(newMessageText);
        props.store.dispatch(action);
    }
    
    return (<SendMessage newMessageTextChange={newMessageTextChange} sendMessage={sendMessage}
                         newMessageText={newMessageText} />)
}

// let mapStateToProps = (state) => {
//     return {}
//
// }
// let mapDispatchToProps = () => {
//     return {
//
//     }
// }
//
// const SuperSendMessageContainer = connect(mapStateToProps, mapDispatchToProps)();

export default SendMessageContainer;
