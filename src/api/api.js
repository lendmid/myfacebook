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
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    getProfile(userId) {
        console.log('Obsolete method. Please use profileApi object.')
        return profileAPI.getProfile(userId);
    }
}

export let profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status});
    }
}

export let authAPI = {
    me() {
        return instance.get('auth/me');
    }
}