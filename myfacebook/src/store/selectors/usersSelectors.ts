import {createSelector} from "reselect"
import {AppStateType} from "../index";
import {IUser} from "../reducers/users.reducer";


const getUsersSelector = (state: AppStateType) => state.usersPage.users;

export const getUsers = createSelector(getUsersSelector, (users: IUser[]) => {
    return users.filter(user => !!user.status && !!user.photo);
})

export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount;
