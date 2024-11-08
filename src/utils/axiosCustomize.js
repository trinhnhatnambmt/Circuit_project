import axios from "axios";
import { store } from "../redux/store";
export const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        const state = store.getState();
        const accessToken = state.user?.account?.access_token;

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        return response && response.data ? response.data : response;
    },
    function (error) {
        return error && error.response && error.response.data
            ? error.response.data
            : Promise.reject(error);
    }
);

export default instance;
