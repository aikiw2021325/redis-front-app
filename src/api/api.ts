import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://192.168.24.38/api',
    withCredentials: true,
    headers :{
        'Content-Type': 'application/json',
    }
});

export default apiClient;
