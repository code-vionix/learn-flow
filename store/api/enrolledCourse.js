import { apiSlice } from "./apiSlice";

export const enrollCourseAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllEnrollCourses: builder.query({
      query: (userId) => `course/user-enroll/${userId}`,
      providesTags: ["EnrollCourses"],
    }),
  }),
});

export const { useGetAllEnrollCoursesQuery } = enrollCourseAPi;
