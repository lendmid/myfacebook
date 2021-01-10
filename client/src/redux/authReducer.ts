import httpRequest from "../helpers/requests";
import Cookies from "js-cookie";


const SET_USER_DATA = 'myFacebook/auth/SET_USER_DATA';
const SET_ERROR = 'myFacebook/auth/SET_ERROR';
const LOADING_START = 'myFacebook/auth/LOADING_START';
const LOADING_END = 'myFacebook/auth/LOADING_END';


interface IAuth {
    isLoading: boolean;
    isAuth: boolean;
    email: string | null;
    userId: string | null;
    error: string | null;
}

const initialState: IAuth = {
    isLoading: false,
    isAuth: false,
    email: null,
    userId: null,
    error: null,
};


const authReducer = (state = initialState, action: any): IAuth => {
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
                error: action.error
            };
        default:
            return state
    }
};

export const getUserData = () => async (dispatch: any) => {
    dispatch({type: LOADING_START});
    let res = await httpRequest('/api/auth/userData', 'GET');

    if (res.success) {
        const {userId, email} = res.payload;
        dispatch({type: SET_USER_DATA, userId, email, isAuth: true});
    }
    if (!res.success) dispatch({type: SET_ERROR, error: res.error});

    dispatch({type: LOADING_END});
};

export const logIn = (email: string, password: string) => async (dispatch: any) => {
    dispatch({type: LOADING_START});
    let res = await httpRequest('/api/auth/login', 'POST', {email, password});

    if (res.success) dispatch({type: SET_USER_DATA, userId: res.payload.userId, email, isAuth: true});
    if (!res.success) dispatch({type: SET_ERROR, error: res.error});

    dispatch({type: LOADING_END});

    // write server error in initial state. Find it in new component alert in login + register and universal component alert
};

export const logOut = () => async (dispatch: any) => {
    dispatch({type: SET_USER_DATA, userId: null, email: null, isAuth: false});
    Cookies.remove("token");
};

// new API
// export const register = (email: string, password: string, firstName: string, lastName: string) => async (dispatch: any) => {
//     // let res = await newAuthAPI.register(email, password, firstName, lastName);
// };

export default authReducer;
