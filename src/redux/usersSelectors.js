import {createSelector} from "reselect"


export let getUsers = state => {
    return state.usersPage.users;
}

export let getUsersSelector = createSelector(getUsers, users => {
    return users.filter(u => true);
})

export let getPageSize = state => {
    return state.usersPage.pageSize;
}

export let getTotalUsersCount = state => {
    return state.usersPage.totalUsersCount;
}

export let getCurrentPage = state => {
    return state.usersPage.currentPage;
}

export let getIsFetching = state => {
    return state.usersPage.isFetching;
}
