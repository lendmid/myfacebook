// in is store from Redux library

// import profileReducer from './profileReducer'
// import messagesReducer from './messagesReducer'

let _internals_store = {
    _state: {
        profilePage: {
            posts: [{
                id: 1,
                message: "Sint aliquid cumque quae minima ipsum nisi placeat illum culpa!",
                likesCount: 36
            },
                {
                    id: 2,
                    message: "Animi accusamus necessitatibus consectetur natus sequi adipisci explicabo quis quidem est distinctio voluptates et quibusdam.",
                    likesCount: 52
                },
                {
                    id: 3,
                    message: "Temporibus quos culpa molestiae quasi perspiciatis voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illum quam a magnam alias perferendis laudantium, beatae cum, debitis necessitatibus reiciendis, sint dignissimos at iusto voluptate perspiciatis nam temporibus sunt.",
                    likesCount: 17
                },
            ],
            newPostText: ''
        },
        messagesPage: {
            messagesData: [
                {
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
            ],
            newMessageText: '',
            historyMessages: [
                "Amet delectus dolor, ipsam eveniet fuga beatae.",
                "Vitae possimus, obcaecati quasi ab velit magnam officia aperiam fugit.",
                "Iste, error cumque. Laudantium, odit iure, ullam ipsa saepe.",
                "Autem officiis aut labore dolorum voluptatem enim dicta exercitationem veniam.",
                "Quam quo quae beatae facilis doloribus. Temporibus, qui!",
                "Saepe animi aliquam accusamus reiciendis, assumenda eum sunt.",
            ],
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('State change')
    },
    dispatch(action) {
        // this._state.profilePage  = profileReducer(this._state.profilePage, action);
        // this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        
        this._callSubscriber(this._state);
    }
}

// export default _internals _store;
