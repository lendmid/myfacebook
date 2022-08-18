import request from "../../utils/request";
import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuth} from "./auth.types";
import {API_USERS} from "../constants.api";
import {AppDispatch} from "../index";
import {parseJwt} from "../../utils/token";

export const resetAppStateAction = createAction('logout');

const initialState: IAuth = {
    isLoading: false,
    error: null,

    isAuth: false,
    email: null,
    userId: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        fetchAuthUserDataSuccess(state, action: PayloadAction<IAuth>) {
            state.userId = action.payload.userId;
            state.email = action.payload.email;
            state.isAuth = action.payload.isAuth;
        },
        fetchAuthUserDataError(state, action: PayloadAction<string | undefined>) {
            state.isLoading = false;
            state.error = action.payload ?? null;
        },
        loadingStart(state) {
            state.isLoading = true;
        },
        loadingEnd(state) {
            state.isLoading = false;
        },
        setError(state, action) {
            state.error = action.payload.error;
        },
        clearError(state, action) {
            state.error = null;
        },
        logOut(state) {
            state = initialState
        }
    }
})

export const getUserDataFromToken = () => async (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.loadingStart());
    try {
        const token = localStorage.getItem('accessToken');
        const jsonFromAccessToken = await parseJwt(token);

        const {email, userId} = jsonFromAccessToken;
        if (!email || !userId) return await dispatch(logOut());

        dispatch({type: SET_DATA_FROM_TOKEN, login: user, authUserRoles: roles, userID: user_id, isAuth: true});
        dispatch(authSlice.actions.loadingEnd());
    } catch (error) {
        await dispatch(logOut())
    }
}

export const getUserData = () => async (dispatch: any) => {
    dispatch(authSlice.actions.loadingStart());

    let res = await request(`${API_USERS}`, 'GET', {id:});
    if (res.success) dispatch(authSlice.actions.fetchAuthUserDataSuccess(res.payload))
    if (!res.success) dispatch(authSlice.actions.setError(res.error));
    // userId: res.payload.userId, email: res.payload.email, isAuth: true
    dispatch(authSlice.actions.loadingEnd());
};

export const logIn = (email: string, password: string) => async (dispatch: any) => {
    dispatch(authSlice.actions.loadingStart());
    let res = await request('/api/auth/login', 'POST', {email, password});
    if (res.success) dispatch({type: SET_USER_DATA, userId: res.payload.userId, email, isAuth: true});
    if (!res.success) dispatch(authSlice.actions.setError(res.error));
    dispatch(authSlice.actions.loadingEnd());
};

export const register = (email: string, password: string, firstName: string, lastName: string) => async (dispatch: any) => {
    dispatch(authSlice.actions.loadingStart());
    const res = await request('/api/auth/register', 'POST', {email, password, firstName, lastName});
    if (res.success) dispatch({type: SET_USER_DATA, userId: res.payload.userId, email, isAuth: true});
    if (!res.success) dispatch(authSlice.actions.setError(res.error));
    dispatch(authSlice.actions.loadingEnd());
}

export const logOut = () => async (dispatch: any) => {
    dispatch(resetAppStateAction);
};

export default authSlice.reducer;
