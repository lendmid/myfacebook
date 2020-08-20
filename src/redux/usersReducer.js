const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERSCOUNT = 'SET_TOTAL_USERSCOUNT';

let initialState = {
    users: [
        // {id: 1, followed: false, name: "Dmitry K.", status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, followed: true, name: "Sergey S.", status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, followed: false, name: "Svetlana D.", status: 'I am a boss', location: {city: 'Chicago', country: 'USA'}},
        // {id: 1, followed: false, fullName: "Dmitry K.", status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, followed: true, fullName: "Sergey S.", status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, followed: false, fullName: "Svetlana D.", status: 'I am a boss', location: {city: 'Chicago', country: 'USA'}},
    ],
    pageSizae: 5,
    totalUsersCount: 0,
    currentPage: 2,
}

const usersReducer = (state = initialState, action) => {
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

// export const followAC = () => ({type: FOLLOW, userId})
export const followAC = () => ({type: FOLLOW})
// export const unfollowAC = () => ({type: UNFOLLOW, userId})
export const unfollowAC = () => ({type: UNFOLLOW})
// export const setUsersAC = () => ({type: SET_USERS, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERSCOUNT, totalUsersCount })

export default usersReducer;
