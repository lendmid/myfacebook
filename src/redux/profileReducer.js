const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            state.posts.unshift(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state
    }
}


export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (newPostText) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: newPostText })

export default profileReducer;
