import axios from "axios";
import { selectAuthToken } from "../redux/features/auth/authSlice";
import store from "../redux/store";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});

axiosInstance.interceptors.request.use(
    config => {
        const token = selectAuthToken(store.getState()) || localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status && error.response === 401) {
            store.dispatch(logout());
            // window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;