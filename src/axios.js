import axios from 'axios';

// Backend API URL'sini buraya ekleyin
const API_URL = 'http://localhost:8080';

// Axios instance oluşturuyoruz
const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Credential bilgilerini eklemek için
});

// Token'ı alıp Authorization header'ına ekliyoruz
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');  // Token'ı localStorage'dan alıyoruz
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;  // Bearer token formatında ekliyoruz
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Hatası:', error.message);
        console.error('URL:', error.config?.url);
        console.error('Metot:', error.config?.method);
        console.error('Başlıklar:', error.config?.headers);

        if (error.response) {
            console.error('Durum Kodu:', error.response.status);
            console.error('Yanıt:', error.response.data);
        } else if (error.request) {
            console.error('Yanıt Alınamadı:', error.request);
        } else {
            console.error('İstek Hazırlanırken Hata:', error.message);
        }

        return Promise.reject(error);
    }
);


export default axiosInstance;
