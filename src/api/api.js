import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "0829fe05-52c7-4d43-8d25-e0b2e351b4be"
    }
});

export const usersAPI = {

    getUsers (currentPage = 1, pageSize = 2) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    unfollow (id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },

    follow (id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    getUserProfile (id) {
        return instance.get(`profile/${id}`).then(response => response.data);
    }
};

export const authAPI = {
    authMe () {
        return instance.get(`auth/me`).then(response => response.data);
    },
};