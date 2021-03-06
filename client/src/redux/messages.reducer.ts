import avatar_1 from "./../assets/images/avatar_1.png"
import avatar_2 from "./../assets/images/avatar_2.png"
import avatar_3 from "./../assets/images/avatar_3.png"
import avatar_4 from "./../assets/images/avatar_4.png"
import avatar_5 from "./../assets/images/avatar_5.png"

const SEND_MESSAGE = 'myFacebook/message/SEND-MESSAGE';

type MessagesDataType = {
    id: number
    name: string
    img: string
    message: Array<string>
    date: string
}

const initialState = {
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
    ] as Array<MessagesDataType>,
    historyMessages: generateHistoryMessages(15)
};

export type InitialStateType = typeof initialState;

function generateHistoryMessages(n: number) {
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

export function messagesReducer(state: InitialStateType = initialState, action: any): InitialStateType {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                historyMessages: [...state.historyMessages, {
                    message: `${action.newMessageText}`,
                    id: Math.random() * 5000
                }],
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