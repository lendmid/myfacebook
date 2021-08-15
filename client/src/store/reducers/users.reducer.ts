import request from "../../helpers/request";

const SET_USERS = 'myFacebook/users/SET-USERS';
const SET_CURRENT_PAGE = 'myFacebook/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'myFacebook/users/SET_TOTAL_USERS_COUNT';
const LOADING_START = 'myFacebook/users/LOADING_START';
const LOADING_END = 'myFacebook/users/LOADING_END';


export interface IUser {
    id?: string
    name?: string
    status?: string
    photo?: string | null
}

interface IUsers {
    users: [] | IUser[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    usersIsRequested: boolean
}

const initialState: IUsers = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 10,
    isLoading: false,
    usersIsRequested: false,
}


const usersReducer = (state = initialState, action: any): IUsers => {
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
    dispatch({type: LOADING_START});
    let res = await request(`/api/users`);
    console.log(res)
    // if (res.success) dispatch({type: SET_PROFILE_DATA, profile: res.payload});
    // if (!res.success) dispatch({type: SET_ERROR, error: res.error});
    // let [users, totalCount] = await usersAPI.requestUsers(page, pageSize)

    dispatch({type: LOADING_END});
    // dispatch({type: SET_USERS, users});
    // dispatch({type: SET_TOTAL_USERS_COUNT, totalUsersCount: Math.ceil(totalCount)});
}

export default usersReducer;
