const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERSCOUNT = 'SET_TOTAL_USERSCOUNT';

let initialState = {
    users: [],
    pageSizae: 5,
    totalUsersCount: 0,
    currentPage: 2,
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
        case SET_TOTAL_USERSCOUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        default:
            return state
    }
}

export let followAC = (userId) => ({type: FOLLOW, userId});
export let unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export let setUsersAC = (users) => ({type: SET_USERS, users });
export let setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage });
export let setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERSCOUNT, totalUsersCount });

export default usersReducer;
