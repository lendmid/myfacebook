import {createSelector} from "reselect"
import {AppStateType} from "../redux-store";
import {IUser} from "../../components/Users/Users";


const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users: IUser[]) => {
    return users.filter(user => !!user.status && !!user.photos);
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
