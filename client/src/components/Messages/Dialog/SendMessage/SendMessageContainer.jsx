import {sendMessage} from "../../../../store/reducers/messages.reducer";
import SendMessage from "./SendMessage";
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form"


const mapStateToProps = (state) => ({
    newMessageText: state.messagesPage.newMessageText,
});

const SendMessageContainer = compose(
    connect(mapStateToProps, {sendMessage}),
    reduxForm({
        form: 'sendMessage',
    }),
)(SendMessage);

export default SendMessageContainer;
