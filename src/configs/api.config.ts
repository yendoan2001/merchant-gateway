import axios from 'axios';
import * as process from 'process';
import {useUserStore} from "@/features/auth/user.store";
import {REQUEST_TIMEOUT} from "@/utils/constants/constants";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: REQUEST_TIMEOUT,
});
api.interceptors.request.use((config) => {
        const token = useUserStore.getState().accessToken;
        if (token) config.headers['Authorization'] = 'Bearer ' + token;
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            useUserStore.getState().logout();
        }

        if (error.response.data?.code === 11000) {
            return Promise.reject(new Error('Duplicated data'));
        }

        const customMessage = error?.response?.data?.message;
        if (customMessage) return Promise.reject(new Error(customMessage));
        return Promise.reject(error);
    }
);
