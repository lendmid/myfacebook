import {authAPI} from "../api/api";
// import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'myFacebook/auth/SET_USER_DATA';


export type InitialStateType = typeof initialState;

const initialState = {
    authorizedUserId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
}

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

type setUserDataType = {
    type: typeof SET_USER_DATA,
    payload: {
        authorizedUserId: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean
    }
}

export const setUserData = (authorizedUserId: number | null, email: string | null, login: string | null, isAuth: boolean): setUserDataType => ({
    type: SET_USER_DATA,
    payload: {authorizedUserId, email, login, isAuth}
});

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const logIn = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    let response = await authAPI.logIn(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    }
    // else {
    //     let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
    //     dispatch(stopSubmit("logIn", {_error: message}));
    // }
}

export const logOut = () => async (dispatch: any) => {
    let response = await authAPI.logOut();
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}

export default authReducer;
