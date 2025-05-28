import { apiSlice } from "./apiSlice";

export const enrollCourseAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllEnrollCourses: builder.query({
      query: () => `course/user-enroll`,
      providesTags: ["EnrollCourses"],
    }),
  }),
});

export const { useGetAllEnrollCoursesQuery } = enrollCourseAPi;
