import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_ROUTE_URL,
    prepareHeaders: async (headers, { getState }) => {
      const token = await getSession();
      console.log("token", token);

      if (token) {
        headers.set("authorization", `Bearer ${token?.accessToken}`);
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
    "testimonials",
    "testimonial",
    "contacts",
    "contact",
    "faqs",
    "faq",
  ],
  endpoints: (builder) => ({}),

});
