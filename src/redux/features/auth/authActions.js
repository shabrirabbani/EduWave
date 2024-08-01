import axios from "axios";
import { loginSuccess, setError } from "./authSlice";
import axiosInstance from "../../../api/axiosinstance";

export const login = (credentials) => async (dispatch) => {
    try {
        const response = await axiosInstance.post("/auth/login", credentials);
            if (response.status === 200) {
              const {username, token, roles} = response.data.data;
              localStorage.setItem("token", token);
              dispatch(loginSuccess({username, token, roles}));
            }
    } catch (error) {
        dispatch(setError(error.response?.data?.message || error.message));
    }
} 