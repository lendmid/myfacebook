import {IUser} from "../components/Users/Users";

const SET_USERS = 'myFacebook/users/SET-USERS';
const SET_CURRENT_PAGE = 'myFacebook/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'myFacebook/users/SET_TOTAL_USERS_COUNT';
const LOADING_START = 'myFacebook/users/LOADING_START';
const LOADING_END = 'myFacebook/users/LOADING_END';


const initialState = {
    users: [] as IUser[],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 10,
    isLoading: false,
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
        case LOADING_START:
            return {...state, isLoading: true};
        case LOADING_END:
            return {...state, isLoading: false};
        default:
            return state
    }
}

// 4
export const requestUsers = (lastId = '') => async (dispatch: any) => {
    dispatch({type: LOADING_START, isLoading: true});

    // let [users, totalCount] = await usersAPI.requestUsers(page, pageSize)

    dispatch({type: LOADING_END, isLoading: false});
    // dispatch({type: SET_USERS, users});
    // dispatch({type: SET_TOTAL_USERS_COUNT, totalUsersCount: Math.ceil(totalCount)});
}

export default usersReducer;
