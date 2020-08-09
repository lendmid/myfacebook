import React from "react";
import {connect} from "react-redux";
import Message from "./Message/Message";
import DialogHistory from "./DialogHistory";


let mapStateToProps = (state) => {
    return {
        historyMessages: state.messagesPage.historyMessages.map(message => <Message message={message} />)
    }
}

const DialogHistoryContainer = connect(mapStateToProps)(DialogHistory);

export default DialogHistoryContainer;
