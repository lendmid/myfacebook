const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
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
        dialogsPage: {
            dialogsData: [{
                    id: 1,
                    name: "Megan Claire Washington",
                    img: "https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-26.png",
                    message: "Nihil eos veritatis fuga nesciunt asperiores dolorem beatae maiores debitis consequuntur nulla odio doloremque impedit rem eligendi fugit.",
                    date: "3 jul",
                },
                {
                    id: 2,
                    name: "Patrick Steven Gonzales",
                    img: "https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-12.png",
                    message: "Illum vitae iure, qui et optio natus quas corrupti hic blanditiis voluptatem dolorum, mollitia quis officia alias?",
                    date: "1 jun",
                },
                {
                    id: 3,
                    name: "Stephanie Lillian Coleman",
                    img: "https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-24.png",
                    message: "Recusandae, ea maiores? Nostrum perspiciatis obcaecati id autem dicta, debitis expedita accusamus deserunt quos fugiat ipsam eveniet!",
                    date: "18 may",
                },
                {
                    id: 4,
                    name: "Kimberly Stephanie Reed",
                    img: "https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-20.png",
                    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis pariatur delectus ullam?",
                    date: "12 apr",
                },
                {
                    id: 5,
                    name: "Ethan Ian Clark",
                    img: "https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-13.png",
                    message: "At, voluptatibus consequatur sit asperiores cupiditate libero optio ipsam possimus commodi nostrum quos maiores illo vitae nisi quasi?",
                    date: "15 mar",
                },
            ],
            messages: '',
            newMessageBody : '',
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
        // this.rerenderEntireTree = obserever;
    },
    _callSubscriber() {
        console.log('State change')
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newMessageBody;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostCreator = (newPostText) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: newPostText })
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (newMessageBody) => ({ type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: newMessageBody })
export default store;
window.store = store;