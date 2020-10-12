import {createSelector} from "reselect"
import {AppStateType} from "./redux-store";
import {UserType} from "../types/types";


const getUsers = (state: AppStateType) => {
    return state.usersPage.users;
}

export const getUsersSelector = createSelector(getUsers, (users: Array<UserType>) => {
    return users.filter(user => !!user.status && !!user.photos.large);
})

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage;
}
