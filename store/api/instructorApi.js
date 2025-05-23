import { apiSlice } from "./apiSlice";

export const instructorApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllInstructor: builder.query(
            {
                query: () => `/instructors`,
                providesTags: ['instructors']
            }
        ),
        getAllInstructorOfTheMonth: builder.query(
            {
                query: () => `/instructors/top-instructor-of-month`,
                providesTags: ['instructors']
            }
        
        ),
        getPopularInstructor: builder.query(
            {
                query: () => `/instructors/popular-instructor`,
                providesTags: ['instructors']
            }
        
        ),
        getInstructorById: builder.query(
            {
                query: (id) => `/instructors/${id}`,
                providesTags: ['instructor']
            }
        ),
        addNewInstructor: builder.mutation(
            {
                query: (instructor) => {
                    return {
                        url: '/instructors',
                        method: 'POST',
                        body: instructor
                    }
                },
                invalidatesTags: ['instructors']

            }
        ),

        updateInstructor: builder.mutation({
        query: ({ id, ...data }) => ({
            url: `/instructors/${id}`,
            method: 'PUT',
            body: data,
        }),
        invalidatesTags: ['instructors', 'instructor'],
        }),

        deleteInstructor: builder.mutation(
            {
                query: (id) => {
                    return {
                        url: `/instructors/${id}`,
                        method: 'DELETE',
                    }
                },
                invalidatesTags: ['instructors']
            }
        ),
    }),
})

export const {
    useGetAllInstructorQuery,
    useGetAllInstructorOfTheMonthQuery,
    useGetPopularInstructorQuery,
    useGetInstructorByIdQuery,
    useAddNewInstructorMutation,
    useUpdateInstructorMutation,
    useDeleteInstructorMutation
} = instructorApi;