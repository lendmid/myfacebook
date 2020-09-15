import React from "react";
import {connect} from "react-redux";
import DialogHeader from "./DialogHeader";


let DialogHeaderContainer = props => {
    return (
        <DialogHeader {...props} />
    )
}

let mapStateToProps = (state) => ({
    // img: state.messagesPage
    // name: state.messagesPage
    // example lastMessages: state.messagesPage.messagesData.map(lastM => <LastMessage key={lastM.id} name={lastM.name} img={lastM.img} date={lastM.date} message={lastM.message} />)
})

export default connect(mapStateToProps, null)(DialogHeaderContainer)
