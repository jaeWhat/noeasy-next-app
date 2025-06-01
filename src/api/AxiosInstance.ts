import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NOEASY_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(`[Axios Error ${error.response.status}]`, error.response.data);

      if (error.response.status === 401) {
        // 예: 로그아웃 또는 토큰 갱신 처리
        console.warn('인증 실패. 로그인 페이지로 이동할 수 있음.');
      }
    }
    return Promise.reject(error);
  }
);

export default api;