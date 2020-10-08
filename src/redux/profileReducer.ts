import {profileAPI} from "../api/api";

const ADD_POST = 'myFacebook/profile/ADD-POST';
const SET_PROFILE = 'myFacebook/profile/SET-PROFILE';
const SET_STATUS = 'myFacebook/profile/SET-STATUS';
const UPDATE_STATUS = 'myFacebook/profile/UPDATE-STATUS';
const DELETE_POST = 'myFacebook/profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'myFacebook/profile/SAVE_PHOTO_SUCCESS';
const LOADING_PROFILE = 'myFacebook/profile/LOADING_PROFILE';


type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfileType = {
    userId: number
    fullName: string
    status: string
    photos: PhotosType
}

type PhotosType = {
    small: string | null
    large: string | null
}


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
                        id: Number(`${state.posts[0].id}`) + 1,
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

type addPostCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostCreator = (newPostText: string): addPostCreatorType => ({type: ADD_POST, newPostText})

type setProfileType = {
    type: typeof SET_PROFILE
    profile: ProfileType
}
export const setProfile = (profile: ProfileType): setProfileType => ({type: SET_PROFILE, profile})
export const loadProfile = () => ({type: LOADING_PROFILE})

type setStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): setStatusType => ({type: SET_STATUS, status})

type deletePostType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): deletePostType => ({type: DELETE_POST, postId})

type savePhotoCreatorType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoCreator = (photos: PhotosType): savePhotoCreatorType => ({type: SAVE_PHOTO_SUCCESS, photos})


export const addPost = (newPostText: string) => {
    return (dispatch: any) => dispatch(addPostCreator(newPostText));
}

export const deletePostThunk = (postId: number) => {
    return (dispatch: any) => dispatch(deletePost(postId));
}

export const getProfile = (userId: number) => async (dispatch: any) => {
    dispatch(loadProfile());
    let response = await profileAPI.requestProfile(userId);
    dispatch(setProfile(response.data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    dispatch(loadProfile());
    let response = await profileAPI.requestStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async () => {
    await profileAPI.updateStatus(status);
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.updatePhoto(file);
    if (response.data.resultCode !== 0) return;
    dispatch(savePhotoCreator(response.data.photos));
}

export default profileReducer;
