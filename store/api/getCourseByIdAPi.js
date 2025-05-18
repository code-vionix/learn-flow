import { apiSlice } from "./apiSlice";

export const getcourseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch Course by ID
    getCourseById: builder.query({
      query: (id) => `/courses/${id}`,
      providesTags: (result, error, id) => [{ type: "Course", id }],
    }),
  }),
});

// Export hooks
export const { useGetCourseByIdQuery } = getcourseApi;
