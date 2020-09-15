import React from "react";
import LastMessage from "./LastMessage/LastMessage";
import {connect} from "react-redux";
import LastMessages from "./LastMessages";


let LastMessagesContainer = props => {
    return (
        <LastMessages {...props} />
    )
}

let mapStateToProps = (state) => ({
    lastMessages: state.messagesPage.messagesData.map(lastM => <LastMessage key={lastM.id} name={lastM.name} img={lastM.img} date={lastM.date} message={lastM.message} />)
})

export default connect(mapStateToProps, null)(LastMessagesContainer)
