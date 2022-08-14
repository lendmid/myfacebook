import React from "react";
import {connect} from "react-redux";
import Message from "./Message/Message";
import DialogHistory from "./DialogHistory";


const mapStateToProps = (state) => ({
    historyMessages: state.messagesPage.historyMessages.map(message => <Message message={message.message} key={message.id} />)
});

const DialogHistoryContainer = connect(mapStateToProps)(DialogHistory);

export default DialogHistoryContainer;
