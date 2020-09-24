import {createSelector} from "reselect"


export const getUsers = state => {
    return state.usersPage.users;
}

export const getUsersSelector = createSelector(getUsers, users => {
    return users.filter(user => !!user.status);
})

export const getPageSize = state => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = state => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = state => {
    return state.usersPage.currentPage;
}
