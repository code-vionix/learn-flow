import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_ROUTE_URL,
        prepareHeaders: (headers, { getState }) => {
            const state = getState();
            const token = state.auth?.accessToken;
        
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
