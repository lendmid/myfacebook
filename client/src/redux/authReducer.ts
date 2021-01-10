import request from "../helpers/request";
import Cookies from "js-cookie";


const SET_USER_DATA = 'myFacebook/auth/SET_USER_DATA';
const SET_ERROR = 'myFacebook/auth/SET_ERROR';
const CLEAR_ERROR = 'myFacebook/auth/CLEAR_ERROR';
const LOADING_START = 'myFacebook/auth/LOADING_START';
const LOADING_END = 'myFacebook/auth/LOADING_END';


interface IAuth {
    isLoading: boolean;
    isAuth: boolean;
    email: string | null;
    userId: string | null;
    serverError: string | null;
}

const initialState: IAuth = {
    isLoading: false,
    isAuth: false,
    email: null,
    userId: null,
    serverError: null,
};


export function authReducer(state: IAuth = initialState, action: any): IAuth {
    switch (action.type) {
        case LOADING_START: {
            return {...state, isLoading: true}
        }
        case LOADING_END: {
            return {...state, isLoading: false}
        }
        case SET_USER_DATA:
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                isAuth: action.isAuth,
            };
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
        default:
            return state
    }
}

export const getUserData = () => async (dispatch: any) => {
    dispatch({type: LOADING_START});
    let res = await request('/api/auth/userData', 'GET');

    if (res.success) {
        const {userId, email} = res.payload;
        dispatch({type: SET_USER_DATA, userId, email, isAuth: true});
    }

    dispatch({type: LOADING_END});
};

export const logIn = (email: string, password: string) => async (dispatch: any) => {
    dispatch({type: LOADING_START});
    let res = await request('/api/auth/login', 'POST', {email, password});

    if (res.success) dispatch({type: SET_USER_DATA, userId: res.payload.userId, email, isAuth: true});
    if (!res.success) dispatch({type: SET_ERROR, error: res.error});

    dispatch({type: LOADING_END});
};

export const logOut = () => async (dispatch: any) => {
    dispatch({type: SET_USER_DATA, userId: null, email: null, isAuth: false});
    Cookies.remove("token");
};

export const register = (email: string, password: string, firstName: string, lastName: string) => {
    return async (dispatch: any) => {
        dispatch({type: LOADING_START});
        const res = await request('/api/auth/register', 'POST', {email, password, firstName, lastName});

        if (res.success) dispatch({type: SET_USER_DATA, userId: res.payload.userId, email, isAuth: true});
        if (!res.success) dispatch({type: SET_ERROR, error: res.error});

        dispatch({type: LOADING_END});
    }
}

export const clearError = () => async (dispatch: any) => dispatch({type: CLEAR_ERROR});
