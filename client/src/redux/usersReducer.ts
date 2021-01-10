import {usersAPI} from "../api/api";
import {UserType} from "../types/types";

const SET_USERS = 'myFacebook/users/SET-USERS';
const SET_CURRENT_PAGE = 'myFacebook/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'myFacebook/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'myFacebook/users/TOGGLE_IS_FETCHING';


const initialState = {
    users: [] as UserType[],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 10,
    isFetching: false,
}

export type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

// 6
export const requestUsers = (page = 1, pageSize = 100) => async (dispatch: any) => {
    dispatch({type: SET_CURRENT_PAGE, page});
    dispatch({type: TOGGLE_IS_FETCHING, isFetching: true});
    let [users, totalCount] = await usersAPI.requestUsers(page, pageSize)

    dispatch({type: TOGGLE_IS_FETCHING, isFetching: false});
    dispatch({type: SET_USERS, users});
    dispatch({type: SET_TOTAL_USERS_COUNT, totalUsersCount: Math.ceil(totalCount)});
}

export default usersReducer;
