// import { act } from "react-dom/test-utils";

// import { rerenderEntireTree } from "../render";
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
        messagesPage: {
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
            ]
        }
    },
    getState() {
        return store._state;
    },
    subscribe(obserever) {
        this.rerenderEntireTree = obserever;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: action.message,
                likesCount: 0,
            }
            this._state.profilePage.posts.unshift(newPost);
            this.rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            // this._callSubscriber(this._state)
        }
    }
}

export default store;
window.store = store;
