import * as axios from "axios";
// it is DAL - date access layer

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    },
})

export let usersAPI = {
    requestUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
}

export let profileAPI = {
    requestProfile(userId) {
        return instance.get('profile/' + userId);
    },
    requestStatus(userId) {
        return instance.get('profile/status/' + 2);
        // return instance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status});
    }
}

export let authAPI = {
    me() {
        return instance.get('auth/me');
    },
    logIn(email, password, rememberMe = true) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logOut() {
        return instance.delete('auth/login');
    }
    
}