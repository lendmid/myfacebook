import avatar_1 from "./../assets/images/avatar_1.png"
import avatar_2 from "./../assets/images/avatar_2.png"
import avatar_3 from "./../assets/images/avatar_3.png"
import avatar_4 from "./../assets/images/avatar_4.png"
import avatar_5 from "./../assets/images/avatar_5.png"

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messagesData: [
        {
            id: 1,
            name: "Megan Claire Washington",
            img: avatar_1,
            message: [
                "Nihil eos veritatis fuga nesciunt asperiores dolorem beatae maiores debitis consequuntur nulla odio doloremque impedit rem eligendi fugit.",
            ],
            date: "3 jul",
        },
        {
            id: 2,
            name: "Patrick Steven Gonzales",
            img: avatar_2,
            message: [
                "Illum vitae iure, qui et optio natus quas corrupti hic blanditiis voluptatem dolorum, mollitia quis officia alias?",
            ],
            date: "1 jun",
        },
        {
            id: 3,
            name: "Stephanie Lillian Coleman",
            img: avatar_3,
            message: [
                "Recusandae, ea maiores? Nostrum perspiciatis obcaecati id autem dicta, debitis expedita accusamus deserunt quos fugiat ipsam eveniet!",
            ],
            date: "18 may",
        },
        {
            id: 4,
            name: "Kimberly Stephanie Reed",
            img: avatar_4,
            message: [
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis pariatur delectus ullam?",
            ],
            date: "12 apr",
        },
        {
            id: 5,
            name: "Ethan Ian Clark",
            img: avatar_5,
            message: [
                "At, voluptatibus consequatur sit asperiores cupiditate libero optio ipsam possimus commodi nostrum quos maiores illo vitae nisi quasi?",
            ],
            date: "15 mar",
        },
    ],
    newMessageText: '',
    historyMessages: generateHistoryMessages(15)
}

function generateHistoryMessages(n) {
    let historyMessages = [];
    let words1 = ["Amet delectus dolor,", "Vitae possimus,", "Autem officiis aut,", "Veritatis quo,", "Ab molestiae dolore,", "Aperiam debitis mollitia,", "Laudantium, odit iure,", "Doloribus culpa"];
    let words2 = ["error cumque. Laudantium,", "ad voluptates laborum,", "dicta quasi excepturi hic,", "facilis corrupti obcaecati,", "cum soluta nobis est eligendi,", "explicabo tempore,", "velit qui porro incidunt,"];
    let words3 = ["hic deleniti blanditiis", "omnis nemo", "optio cumque nihil", "id quod maxime", "nihil impedit quo", "velit qui porro incidunt alias", "assumenda eum sunt"];
    let words4 = ["voluptates pariatur", "deleniti blanditiis iure", "odio repellat iusto ducimus", "nemo, voluptatum voluptates", "placeat facere possimus", "voluptatibus porro asperiores", "facere tempore quibusdam"];
    
    for (let i = 0; i < n; i++) {
        let rand1 = Math.round(Math.random() * words1.length);
        let rand2 = Math.round(Math.random() * words2.length);
        let rand3 = Math.round(Math.random() * words3.length);
        let rand4 = Math.round(Math.random() * words4.length);
        historyMessages.push({
            message: `${words1[rand1]} ${words2[rand2]} ${words3[rand3]} ${words4[rand4]}.`,
            id: Math.random() * 5000
        })
    }
    return historyMessages;
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageText = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                historyMessages: [...state.historyMessages, `${newMessageText}`]
                
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText,
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (newMessageText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: newMessageText
})

export default messagesReducer;
