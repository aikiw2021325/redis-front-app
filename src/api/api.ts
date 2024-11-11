import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://192.168.11.9:8080', // FastAPI サーバーの URL
    withCredentials: true,
});

export default apiClient;
