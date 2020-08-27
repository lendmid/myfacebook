import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';

let initialState = {
    posts: [
        {
            id: 3,
            message: "Sint aliquid cumque quae minima ipsum nisi placeat illum culpa!",
            likesCount: randomInteger(5, 100)
        },
        {
            id: 2,
            message: "Animi accusamus necessitatibus consectetur natus sequi adipisci explicabo quis quidem est distinctio voluptates et quibusdam.",
            likesCount: randomInteger(5, 100)
        },
        {
            id: 1,
            message: "Temporibus quos culpa molestiae quasi perspiciatis voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illum quam a magnam alias perferendis laudantium, beatae cum, debitis necessitatibus reiciendis, sint dignissimos at iusto voluptate perspiciatis nam temporibus sunt.",
            likesCount: randomInteger(5, 100)
        },
    ],
    newPostText: '',
    profile: null,
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    {
                        id: Number(`${state.posts[0].id}`) + 1,
                        message: state.newPostText,
                        likesCount: randomInteger(5, 100),
                    },
                    ...state.posts
                ],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return  {...state,
                newPostText: action.newPostText,
            };
        case SET_PROFILE:
            return  {...state,
                profile: action.profile,
            };
        default:
            return state
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export let addPostCreator = () => ({type: ADD_POST})
export let updateNewPostTextCreator = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText})
export let setProfile = (profile) => ({type: SET_PROFILE, profile})

export let getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setProfile(response.data));
    })
}

export default profileReducer;
