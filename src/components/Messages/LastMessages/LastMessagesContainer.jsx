import React from "react";
import LastMessage from "./LastMessage/LastMessage";
import {connect} from "react-redux";
import LastMessages from "./LastMessages";


const mapStateToProps = (state) => ({
    lastMessages: state.messagesPage.messagesData.map(lastM => <LastMessage key={lastM.id} userId={lastM.id} name={lastM.name} img={lastM.img} date={lastM.date} message={lastM.message} />)
})

const LastMessagesContainer = connect(mapStateToProps)(LastMessages);

export default LastMessagesContainer;
