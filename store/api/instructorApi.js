import { apiSlice } from "./apiSlice";

export const instructorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllInstructor: builder.query({
      query: () => `/instructors`,
      providesTags: ["instructors"],
    }),
    getInstructorById: builder.query({
      query: (id) => `/instructors/user/${id}`,
      providesTags: ["instructor"],
    }),

    getInstructorList: builder.query({
      query: () => `/instructors/instructor-list`,
      providesTags: ["instructors"],
    }),
    addNewInstructor: builder.mutation({
      query: (instructor) => {
        return {
          url: "/instructors",
          method: "POST",
          body: instructor,
        };
      },
      invalidatesTags: ["instructors"],
    }),

    // updateInstructor: builder.mutation(
    //     {
    //         query: (instructor) => {
    //             return {
    //                 url: `/instructors/${instructor?.id}`,
    //                 method: 'PUT',
    //                 body: instructor
    //             }
    //         },
    //         invalidatesTags: ['instructors', 'instructor']
    //     }
    // ),

    updateInstructor: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/instructors/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["instructors", "instructor"],
    }),

    deleteInstructor: builder.mutation({
      query: (id) => {
        return {
          url: `/instructors/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["instructors"],
    }),
  }),
});

export const {
  useGetAllInstructorQuery,
  useGetInstructorByIdQuery,
  useGetInstructorListQuery,
  useAddNewInstructorMutation,
  useUpdateInstructorMutation,
  useDeleteInstructorMutation,
} = instructorApi;
