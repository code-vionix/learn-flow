import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_ROUTE_URL,
        prepareHeaders: (headers, { getState }) => {
            const state = getState();
            // const token = state.auth?.accessToken;
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTNkZTg5NTI5ZTYzNTMwYWZhMWM4OCIsInJvbGUiOiJTVFVERU5UIiwiaWF0IjoxNzQ3NTk1OTMwLCJleHAiOjE3NTUzNzE5MzB9.XG-x6hCIa43mSDwgyvrijEglSg38jZB9Nj0bHNjH5ag";
        
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
        
            return headers;
        }        
    }),
    tagTypes: [
        'courses',
        'course',
        'instructors',
        'instructor',
        'user',
        'EnrollCourses',
        'PurchesHistory',
        'UserProfile',
        'testimonials',
        'testimonial',
        'contacts',
        'contact',
        'faqs',
        'faq'
    ],
    endpoints: (builder) => ({})
});
