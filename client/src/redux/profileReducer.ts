import {profileAPI} from "../api/api";
import request from "../helpers/request";


const SET_PROFILE_DATA = 'myFacebook/profile/SET_PROFILE_DATA';

const ADD_POST = 'myFacebook/profile/ADD-POST';
const DELETE_POST = 'myFacebook/profile/DELETE_POST';

const LOADING_START = 'myFacebook/profile/LOADING_START';
const LOADING_END = 'myFacebook/profile/LOADING_END';
const SET_ERROR = 'myFacebook/profile/SET_ERROR';
const CLEAR_ERROR = 'myFacebook/profile/CLEAR_ERROR';

// const SET_STATUS = 'myFacebook/profile/SET-STATUS';
// const UPDATE_STATUS = 'myFacebook/profile/UPDATE-STATUS';
//
// const SAVE_PHOTO_SUCCESS = 'myFacebook/profile/SAVE_PHOTO_SUCCESS';
// const LOADING_PROFILE = 'myFacebook/profile/LOADING_PROFILE';

interface IPost {
    id: string
    message: string
    date: string
}

interface IProfile {
    isLoading: boolean
    serverError: string | null
    profile: {
        userId: string
        firstName: string
        lastName: string
        status: string | null
        photo: string | null
        posts: IPost[] | []
    } | {} //null
}


const initialState: IProfile = {
    isLoading: false,
    serverError: null,
    profile: {}
}

export function profileReducer(state = initialState, action: any): IProfile {
    switch (action.type) {
        case SET_PROFILE_DATA:
            console.log(action.profile)
            return {
                ...state,
                profile: action.profile
            };
        case ADD_POST:
            return {
                ...state,
                // posts: [
                //     {
                //         id: state.posts[0] ? state.posts[0].id + 1 : 1,
                //         message: action.newPostText,
                //     },
                //     ...state.posts
                // ],
            };
        // case LOADING_PROFILE:
        //     return {
        //         ...state,
        //         isLoading: true
        //     };
        // case SET_STATUS:
        //     return {
        //         ...state,
        //         // status: action.status,
        //         isLoading: false
        //     };
        // case UPDATE_STATUS:
        //     return {
        //         ...state,
        //         // status: action.status,
        //     };
        // case DELETE_POST:
        //     return {
        //         ...state,
        //         // posts: state.posts.filter(p => p.id !== action.postId),
        //     };
        // case SAVE_PHOTO_SUCCESS:
        //     return {
        //         ...state,
        //         // profile: {...state.profile, photos: action.photos} as ProfileType
        //     };

        case SET_ERROR:
            return {
                ...state,
                serverError: action.error
            };
        case CLEAR_ERROR:
            return {
                ...state,
                serverError: null
            };
        case LOADING_START: {
            return {...state, isLoading: true}
        }
        case LOADING_END: {
            return {...state, isLoading: false}
        }
        default:
            return state
    }
}

//1
export const getProfile = () => async (dispatch: any) => {
    dispatch({type: LOADING_START});
    let res = await request('/api/profile', 'GET');

    if (res.success) dispatch({type: SET_PROFILE_DATA, profile: res.payload});
    if (!res.success) dispatch({type: SET_ERROR, error: res.error});

    dispatch({type: LOADING_END});
}

// 2
export const addPost = (postText: string) => async (dispatch: any) => {
    dispatch({type: LOADING_START});

    let res = await request('/api/profile/addPost', 'POST', {postText});
    console.log(res)
    dispatch({type: ADD_POST, postText});
    dispatch({type: LOADING_END});
}
// 3
export const deletePost = (postId: number) => (dispatch: any) => dispatch({type: DELETE_POST, postId});

export const getStatus = (userId: number) => async (dispatch: any) => {
    dispatch({type: LOADING_START});
    // let status = await profileAPI.requestStatus(userId).data;
    // dispatch({type: SET_STATUS, status});
    dispatch({type: LOADING_END});
}
// 4
export const updateStatus = (status: string) => async () => await profileAPI.updateStatus(status);

// 5
export const savePhoto = (file: any) => async (dispatch: any) => {
    dispatch({type: LOADING_START});
    // let res = await profileAPI.updatePhoto(file);
    // if (res.data.resultCode !== 0) return;
    // dispatch({type: SAVE_PHOTO_SUCCESS, photos: res.data.photos});
    dispatch({type: LOADING_END});
}

export default profileReducer;
