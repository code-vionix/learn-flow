import { apiSlice } from "./apiSlice";

export const enrolledTeacherApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllEnrolledCoursesTeacher: builder.query({
      query: () => `course/enrolled-teacher`,
    }),
  }),
});

export const { useGetAllEnrolledCoursesTeacherQuery } = enrolledTeacherApi;
