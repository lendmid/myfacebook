import {profileAPI} from "../api/api";
import {PostType, ProfileType} from "../types/types";


const ADD_POST = 'myFacebook/profile/ADD-POST';
const SET_PROFILE = 'myFacebook/profile/SET-PROFILE';
const SET_STATUS = 'myFacebook/profile/SET-STATUS';
const UPDATE_STATUS = 'myFacebook/profile/UPDATE-STATUS';
const DELETE_POST = 'myFacebook/profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'myFacebook/profile/SAVE_PHOTO_SUCCESS';
const LOADING_PROFILE = 'myFacebook/profile/LOADING_PROFILE';


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
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    isLoading: false,
}

export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    {
                        id: state.posts[0] ? state.posts[0].id + 1 : 1,
                        message: action.newPostText,
                        likesCount: randomInteger(5, 100),
                    },
                    ...state.posts
                ],
            };
        case LOADING_PROFILE:
            return {
                ...state,
                isLoading: true
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
                isLoading: false
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
                profile: {...state.profile, photos: action.photos} as ProfileType
            };
        default:
            return state
    }
}

function randomInteger(min: number, max: number): number {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

// 1
export const addPost = (newPostText: string) => (dispatch: any) => dispatch({type: ADD_POST, newPostText});
// 2
export const deletePost = (postId: number) => (dispatch: any) => dispatch({type: DELETE_POST, postId});

//3
export const getProfile = (userId: number) => async (dispatch: any) => {
    dispatch({type: LOADING_PROFILE});
    let response = await profileAPI.requestProfile(userId);
    dispatch({type: SET_PROFILE, profile: response.data});
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    dispatch({type: LOADING_PROFILE});
    let status = await profileAPI.requestStatus(userId).data;
    dispatch({type: SET_STATUS, status});
}
// 4
export const updateStatus = (status: string) => async () => await profileAPI.updateStatus(status);

// 5
export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.updatePhoto(file);
    if (response.data.resultCode !== 0) return;
    dispatch({type: SAVE_PHOTO_SUCCESS, photos: response.data.photos});
}

export default profileReducer;
