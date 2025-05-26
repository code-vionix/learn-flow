// src/utils/axios.js

import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_ROUTE_URL;

/**
 * এই ফাংশনটা একটি axios instance তৈরি করে
 * চাইলে সাথে token যুক্ত করে
 */
export const createAxiosInstance = (token) => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }), // যদি token থাকে, তাহলে সেটাও header এ দিবে
    },
  });

  return instance;
};
