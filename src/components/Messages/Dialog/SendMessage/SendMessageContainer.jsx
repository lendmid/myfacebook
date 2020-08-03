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

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
            // props.store.dispatch(sendMessageCreator());
        },
        newMessageTextChange: (newMessageText) => {
            dispatch(updateNewMessageTextCreator(newMessageText));
            // props.store.dispatch(updateNewMessageTextCreator(newMessageText));
        },
    }
}

const SuperSendMessageContainer = connect(mapStateToProps, mapDispatchToProps)();

export default SendMessageContainer;
