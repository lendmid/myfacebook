import * as axios from "axios";
// it is DAL - date access layer

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    },
})

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 5) {
        //refactoring: most users without data. Need doing my Api for correct data users
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            //refactoring: not optimized code. Need only for this API
            if (response.data) {
                let users = response.data.items.filter(user => !!user.status)
                return [users, response.data.totalCount];
            }
        })
    },
}

export const profileAPI = {
    requestProfile(userId) {
        return instance.get('profile/' + userId);
    },
    requestStatus(userId) {
        return instance.get('profile/status/' + userId);
        // refactoring: do not work because profile/status/get/id not available
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status});
    },
    updatePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export const authAPI = {
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