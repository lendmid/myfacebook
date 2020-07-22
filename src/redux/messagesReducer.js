const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const messagesReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageText = state.newMessageText;
            state.newMessageText = '';
            state.historyMessages.push(`${newMessageText}`);
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (newMessageText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newMessageText })

export default messagesReducer;
