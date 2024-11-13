import axios from 'axios';
import apiClient from '../api/api';

interface User {
    username: string;
    password: string;
}

interface createUser {
    username: string;
    password: string;
    email: string;
}

export const login = async (user: User) => {
    try {
        const response = await apiClient.post('/login', user);
        console.log("response:");
        console.log(response);
        return response.data;
    } catch (error:any) {
        if (axios.isAxiosError(error)) {
            throw error;
        } 
    }
};

export const createUser = async (createUser: User) => {
    try {
        const response = await apiClient.post('/create', createUser);
        return response.data;
    } catch (error:any) {
        if (axios.isAxiosError(error)) {
            throw error;
        } 
    }
};

export const logout = async () => {
    try {
        const response = await apiClient.post('/logout');
        return response.data;
    } catch (error:any) {
        if (axios.isAxiosError(error)) {
            throw error;
        } 
    }

};

export const getProfile = async () => {
    try {
        const response = await apiClient.get('/profile');
        return response.data;
    } catch (error:any) {
        if (axios.isAxiosError(error)) {
            throw error;
        } 
    }

};
