import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "11a13af9-e26e-4f79-a437-ceba3835ef4b"
    }
});

export const UsersAPI = {
    getUsers (currentPage = 1 ,pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    }
}
export const ProfileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(`profile/status`, { status: status });
    }
}
export const followedAPI = {
    UnfollowRequest(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        });
    },
    followRequest (id) {
        return instance.post(`follow/${id}`,{}).then(response => {
            return response.data;
        });
    }
}
export const headerAPI = {
    headerLoginRequest() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`).then(response => {
            return response.data;
        });
    }
}
export const loginAPI = {
    LoginRequest(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    LogoutRequest(email, password, rememberMe = false) {
        return instance.delete(`auth/login`);
    }
}

