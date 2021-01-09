import {authAPI} from "../api/api";
import httpRequest from "../helpers/requests";


const SET_USER_DATA = 'myFacebook/auth/SET_USER_DATA';


export type InitialStateType = typeof initialState;

const initialState = {
    authorizedUserId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,

};

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                authorizedUserId: action.authorizedUserId,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth,
            };
        default:
            return state
    }
};

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch({type: SET_USER_DATA, payload: { authorizedUserId: id, email, login, isAuth: true }});
    }
};

export const logIn = (email: string, password: string) => async (dispatch: any) => {
    //added toggle loading


    //new login
    let response = await httpRequest('/api/auth/login', 'POST', {email, password});
    console.log(response)
    if (response.success) {
        // dispatch({});
        //will write new user data: token in cookie and userId in initial state
    }
    // if (user) dispatch({type: SET_USER_DATA, email, password});
    // if (!response.success) dispatch(setServerError);
    // write server error in initial state. Find it in new component alert in login + register and universal component alert


    // // old login
    // let response = await authAPI.logIn(email, password, rememberMe);
    // if (response.data.resultCode === 0) {
    //     dispatch(getAuthUserData());
    // }
};

export const logOut = () => async (dispatch: any) => {
    let response = await authAPI.logOut();
    if (response.data.resultCode === 0) dispatch({type: SET_USER_DATA, payload: { authorizedUserId: null, email: null, login: null, isAuth: true }});
};

// new API
// export const register = (email: string, password: string, firstName: string, lastName: string) => async (dispatch: any) => {
//     let response = await newAuthAPI.register(email, password, firstName, lastName);
// };

export default authReducer;
