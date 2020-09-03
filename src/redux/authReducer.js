import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            }
        default:
            return state
    }
}

export let setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});
export let getAuthUserData = () => (dispatch) => {
    debugger
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setUserData(id, email, login, true))
        }
    })
}

export let signIn = (email, password, rememberMe) => (dispatch) => {
    authAPI.signIn(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
    })
}

export let signOut = () => (dispatch) => {
    authAPI.signOut().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    })
}

export default authReducer;
