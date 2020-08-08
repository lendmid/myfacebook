import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../../redux/messagesReducer";
import SendMessage from "./SendMessage";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
    }
    
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (newMessageText) => dispatch(updateNewMessageTextCreator(newMessageText)),
        sendMessage: () => dispatch(sendMessageCreator()),
    }
}
// суть операции в пробрасывании props'ов в компоненту
const SendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessage);

export default SendMessageContainer;
