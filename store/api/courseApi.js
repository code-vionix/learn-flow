import { apiSlice } from "./apiSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourse: builder.query({
      query: () => `/courses`,
      providesTags: ["courses"],
    }),
    getBestSellingCourse: builder.query({
      query: () => `/courses/best-selling`,
      providesTags: ["courses"],
    }),
    getFeaturedCourse: builder.query({
      query: () => `/courses/featured-course`,
      providesTags: ["courses"],
    }),
    getBestSellingCourseByCategory: builder.query({
      query: () => `/courses/featured-course`,
      providesTags: ["courses"],
    }),
    getCourseById: builder.query({
      query: (id) => `/courses/${id}`,
      providesTags: ["course"],
    }),
    addNewCourse: builder.mutation({
      query: (course) => {
        return {
          url: "/courses",
          method: "POST",
          body: course,
        };
      },
      invalidatesTags: ["courses"],
    }),
    updateCourse: builder.mutation({
      query: ({ course, id }) => {
        return {
          url: `/courses/${id}`,
          method: "PUT",
          body: course,
        };
      },
      invalidatesTags: ["courses", "course"],
    }),
    deleteCourse: builder.mutation({
      query: (id) => {
        return {
          url: `/courses/${id}`,
          method: "DELETE",
        };
      },
      // invalidatesTags: ['courses']
    }),
  }),
});

export const {
  useGetAllCourseQuery,
  useGetCourseByIdQuery,
  useGetBestSellingCourseQuery,
  useGetFeaturedCourseQuery,
  useGetBestSellingCourseByCategoryQuery,
  useAddNewCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = courseApi;
