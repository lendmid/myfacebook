import {getRandomPhrases, mock} from "./_mockData";

const SEND_MESSAGE = 'myFacebook/message/SEND-MESSAGE';

export interface IGenerateMessage {
    message: string,
    id: number
}

interface IMessage {
    id: number
    name: string
    img: string
    message: string[]
    date: string
}

interface IMessagesReducer {
    messagesData: IMessage[],
    historyMessages: IGenerateMessage[]
}

const initialState: IMessagesReducer = {
    messagesData: mock.messages,
    historyMessages: getRandomPhrases()
};

export function messagesReducer(state: IMessagesReducer = initialState, action: any): IMessagesReducer {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                historyMessages: [
                    ...state.historyMessages,
                    {message: `${action.newMessageText}`, id: Math.random() * 5000}
                ],
            };
        default:
            return state;
    }
}

// 5
export const sendMessage = (newPostText: string) => (dispatch: any) => {
    dispatch({type: SEND_MESSAGE, newPostText})
}

// 6 get history message with user