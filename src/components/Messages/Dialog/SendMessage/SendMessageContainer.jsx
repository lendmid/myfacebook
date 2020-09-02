import {sendMessageCreator} from "../../../../redux/messagesReducer";
import SendMessage from "./SendMessage";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
    }
    
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => dispatch(sendMessageCreator(newMessageText)),
    }
}

const SendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessage);

export default SendMessageContainer;
