import {usersAPI} from "../api/api";

const FOLLOW = 'myFacebook/users/FOLLOW';
const UNFOLLOW = 'myFacebook/users/UNFOLLOW';
const SET_USERS = 'myFacebook/users/SET-USERS';
const SET_CURRENT_PAGE = 'myFacebook/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'myFacebook/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'myFacebook/users/TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return {...u, followed: true}
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return {...u, followed: false}
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
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
export let follow = (userId) => ({type: FOLLOW, userId});
export let unfollow = (userId) => ({type: UNFOLLOW, userId});
export let setUsers = (users) => ({type: SET_USERS, users});
export let setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export let setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

//requestUsersThunkCreator
export let requestUsers = (page = 1, pageSize = 5) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(page));
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.requestUsers(page, pageSize)
        
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(Math.ceil(data.totalCount)));
    }
}

export default usersReducer;
