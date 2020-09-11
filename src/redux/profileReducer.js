import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const UPDATE_STATUS = 'UPDATE-STATUS';
const DELETE_POST = 'DELETE_POST';

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
    profile: null,
    status: ''
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    {
                        id: Number(`${state.posts[0].id}`) + 1,
                        message: action.newPostText,
                        likesCount: randomInteger(5, 100),
                    },
                    ...state.posts
                ],
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case UPDATE_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            };
        default:
            return state
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export let addPostCreator = (newPostText) => ({type: ADD_POST, newPostText})
export let setProfile = (profile) => ({type: SET_PROFILE, profile})
export let setStatus = (status) => ({type: SET_STATUS, status})
export let deletePost = (postId) => ({type: DELETE_POST, postId})


export let addPost = (newPostText) => {
    return (dispatch) => {
        dispatch(addPostCreator(newPostText))
    }
}

export let requestProfile = (userId) => (dispatch) => {
    profileAPI.requestProfile(userId).then(response => {
        dispatch(setProfile(response.data));
    })
}
export let requestStatus = (userId) => (dispatch) => {
    profileAPI.requestStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    })
}
export let updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode !== 0) return;
        dispatch(setStatus(response.data));
    })
}

export default profileReducer;
