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
                ...action.data,
            }
        default:
            return state
    }
}

export let setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
//ыфзывать в контейнерной компоненте профиля, чтобы получить аутентификационные данные
export let getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setUserData(id, login, email))
        }
    })
}

export default authReducer;
