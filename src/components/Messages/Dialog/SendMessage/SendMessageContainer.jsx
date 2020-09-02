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

const SendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessage);

export default SendMessageContainer;
