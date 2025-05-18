import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_ROUTE_URL,
    prepareHeaders: (headers, { getState }) => {
      // const token = getState().auth.accessToken;
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTNkZTg5NTI5ZTYzNTMwYWZhMWM4OCIsInJvbGUiOiJTVFVERU5UIiwiaWF0IjoxNzQ3NTgxMjk1LCJleHAiOjE3NTUzNTcyOTV9.f-8L50h7xGjG5BpWa0f2okIZung89zBXbFLe1aqiSHQ";
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "courses",
    "course",
    "instructors",
    "instructor",
    "user",
    "EnrollCourses",
    "PurchesHistory",
    "UserProfile",
    "Wishlist",
  ],
  endpoints: (builder) => ({}),
});
