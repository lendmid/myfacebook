import {usersAPI} from "../api/api";

const SET_USERS = 'myFacebook/users/SET-USERS';
const SET_CURRENT_PAGE = 'myFacebook/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'myFacebook/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'myFacebook/users/TOGGLE_IS_FETCHING';

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 6,
    isFetching: false,
}

const usersReducer = (state = initialState, action) => {
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
// методы взыимодействия со state внутри store
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


//requestUsersThunkCreator
export const requestUsers = (page = 1, pageSize = 100) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(page));
        dispatch(toggleIsFetching(true));
        let [users, totalCount] = await usersAPI.requestUsers(page, pageSize)
        
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(users));
        dispatch(setUsersTotalCount(Math.ceil(totalCount)));
    }
}

export default usersReducer;
