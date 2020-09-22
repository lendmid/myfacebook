import {profileAPI} from "../api/api";

const ADD_POST      = 'myFacebook/profile/ADD-POST';
const SET_PROFILE   = 'myFacebook/profile/SET-PROFILE';
const SET_STATUS    = 'myFacebook/profile/SET-STATUS';
const UPDATE_STATUS = 'myFacebook/profile/UPDATE-STATUS';
const DELETE_POST   = 'myFacebook/profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'myFacebook/profile/SAVE_PHOTO_SUCCESS';

const initialState = {
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        default:
            return state
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoCreator = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


export const addPost = (newPostText) => {
    return (dispatch) => dispatch(addPostCreator(newPostText));
}
export const deletePostThunk = (postId) => {
    return (dispatch) => dispatch(deletePost(postId));
}

export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.requestProfile(userId);
    dispatch(setProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.requestStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode !== 0) return;
    dispatch(setStatus(response.data));
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.updatePhoto(file);
    if (response.data.resultCode !== 0) return;
    dispatch(savePhotoCreator(response.data.photos));
}

export default profileReducer;
