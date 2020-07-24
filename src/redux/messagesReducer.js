const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messagesData: [{
        id: 1,
        name: "Megan Claire Washington",
        img: "https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-26.png",
        message: [
            "Nihil eos veritatis fuga nesciunt asperiores dolorem beatae maiores debitis consequuntur nulla odio doloremque impedit rem eligendi fugit.",
        ],
        date: "3 jul",
    },
        {
            id: 2,
            name: "Patrick Steven Gonzales",
            img: "https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-12.png",
            message: [
                "Illum vitae iure, qui et optio natus quas corrupti hic blanditiis voluptatem dolorum, mollitia quis officia alias?",
            ],
            date: "1 jun",
        },
        {
            id: 3,
            name: "Stephanie Lillian Coleman",
            img: "https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-24.png",
            message: [
                "Recusandae, ea maiores? Nostrum perspiciatis obcaecati id autem dicta, debitis expedita accusamus deserunt quos fugiat ipsam eveniet!",
            ],
            date: "18 may",
        },
        {
            id: 4,
            name: "Kimberly Stephanie Reed",
            img: "https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-20.png",
            message: [
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis pariatur delectus ullam?",
            ],
            date: "12 apr",
        },
        {
            id: 5,
            name: "Ethan Ian Clark",
            img: "https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-13.png",
            message: [
                "At, voluptatibus consequatur sit asperiores cupiditate libero optio ipsam possimus commodi nostrum quos maiores illo vitae nisi quasi?",
            ],
            date: "15 mar",
        },
    ],
    newMessageText: '',
    historyMessages: [
        "Amet delectus dolor, ipsam eveniet fuga beatae.",
        "Vitae possimus, obcaecati quasi ab velit magnam officia aperiam fugit.",
        "Iste, error cumque. Laudantium, odit iure, ullam ipsa saepe.",
        "Autem officiis aut labore dolorum voluptatem enim dicta exercitationem veniam.",
        "Quam quo quae beatae facilis doloribus. Temporibus, qui!",
        "Saepe animi aliquam accusamus reiciendis, assumenda eum sunt.",
        "Veritatis quo explicabo ad voluptates laborum, quos accusantium facere tempore quibusdam velit qui porro incidunt alias aliquid",
        "Cum reiciendis perferendis eum vel odio adipisci eos ex. Doloribus culpa incidunt esse necessitatibus tenetur corrupti neque ut, beatae ab.",
        "Minima expedita eaque repellendus dicta quasi excepturi hic deleniti blanditiis iure, odio repellat iusto ducimus voluptatibus porro asperiores.",
        "Suscipit, accusamus quo. Nemo velit rerum excepturi modi omnis. Cupiditate aperiam debitis mollitia explicabo tempore!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nemo, voluptatum voluptates pariatur, voluptatibus sit",
        "Ab molestiae dolore accusamus quidem quia quos facilis corrupti obcaecati deserunt autem eligendi repudiandae! Rerum!",
    ],
}


const messagesReducer = (state = initialState, action) => {
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
export const updateNewMessageTextCreator = (newMessageText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: newMessageText
})

export default messagesReducer;
