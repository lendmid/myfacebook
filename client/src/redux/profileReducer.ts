import request from "../helpers/request";


const SET_PROFILE_DATA = 'myFacebook/profile/SET_PROFILE_DATA';

const ADD_POST = 'myFacebook/profile/ADD-POST';
const DELETE_POST = 'myFacebook/profile/DELETE_POST';
const UPDATE_STATUS = 'myFacebook/profile/UPDATE-STATUS';

const LOADING_START = 'myFacebook/profile/LOADING_START';
const LOADING_END = 'myFacebook/profile/LOADING_END';
const SET_ERROR = 'myFacebook/profile/SET_ERROR';
const CLEAR_ERROR = 'myFacebook/profile/CLEAR_ERROR';

// const SAVE_PHOTO_SUCCESS = 'myFacebook/profile/SAVE_PHOTO_SUCCESS';
// const LOADING_PROFILE = 'myFacebook/profile/LOADING_PROFILE';

export interface IPost {
    id: string
    firstName: string
    lastName: string
    message: string
    date: string
}

export interface IProfile {
    userId: string | null
    firstName: string
    lastName: string
    status: string
    photo: string | null
    placeOfWork: string | null
    liveIn: string | null
    posts: IPost[] | []
}

interface IProfileReducer {
    isLoading: boolean
    serverError: string | null
    profile: IProfile
}


const initialState: IProfileReducer = {
    isLoading: false,
    serverError: null,
    profile: {
        userId: null,
        firstName: '',
        lastName: '',
        status: '',
        photo: null,
        placeOfWork: null,
        liveIn: null,
        posts: []
    }
}

export function profileReducer(state = initialState, action: any): IProfileReducer {
    switch (action.type) {
        case SET_PROFILE_DATA:
            return {
                ...state,
                profile: action.profile
            };
        case ADD_POST:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    posts: [action.post, ...state.profile.posts]
                }
            };
        case DELETE_POST:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    posts: state.profile && state.profile.posts.filter((p: IPost) => p.id !== action.postId),
                }
            };
        case UPDATE_STATUS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    status: action.status
                }
            };
        // case SAVE_PHOTO_SUCCESS:
        //     return {
        //         ...state,
        //         // profile: {...state.profile, photos: action.photos} as IProfile
        //     };

        case SET_ERROR:
            return {...state, serverError: action.error};
        case CLEAR_ERROR:
            return {...state, serverError: null};
        case LOADING_START:
            return {...state, isLoading: true};
        case LOADING_END:
            return {...state, isLoading: false};
        default:
            return state
    }
}

export const getProfile = (userId: string) => async (dispatch: any) => {
    dispatch({type: LOADING_START});
    let res = await request(`/api/profile/${userId}`, 'GET');
    if (res.success) dispatch({type: SET_PROFILE_DATA, profile: res.payload});
    if (!res.success) dispatch({type: SET_ERROR, error: res.error});
    dispatch({type: LOADING_END});
}

export const addPost = (postText: string) => async (dispatch: any) => {
    let res = await request('/api/profile/post', 'POST',
        {postText, date: new Date(Date.now()).toLocaleString()});
    if (res.success) dispatch({type: ADD_POST, post: res.payload});
}

export const deletePost = (postId: string) => async (dispatch: any) => {
    let res = await request('/api/profile/post', 'DELETE', {postId});
    if (res.success) dispatch({type: DELETE_POST, postId});
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let res = await request('/api/profile/status', 'PUT', {status});
    if (res.success) dispatch({type: UPDATE_STATUS, status});
}

// 1
// export const savePhoto = (file: any) => async (dispatch: any) => {
export const savePhoto = () => async (dispatch: any) => {
    dispatch({type: LOADING_START});
    // let res = await profileAPI.updatePhoto(file);
    // if (res.data.resultCode !== 0) return;
    // dispatch({type: SAVE_PHOTO_SUCCESS, photos: res.data.photos});
    dispatch({type: LOADING_END});
}

export default profileReducer;
