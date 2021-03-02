import {createSelector} from "reselect"
import {AppStateType} from "../redux-store";
import {IUser} from "../users.reducer";


const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users: IUser[]) => {
    return users.filter(user => !!user.status && !!user.photo);
})

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
}
