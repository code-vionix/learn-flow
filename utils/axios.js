// src/utils/axios.js

 import axios from "axios";

const {baseUrl} = process.env.NEXT_PUBLIC_API_ROUTE_URL;
const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000, // সর্বোচ্চ 10 সেকেন্ড অপেক্ষা করবে
  headers: {
    "Content-Type": "application/json",
  },
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
