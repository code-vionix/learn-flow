import { apiSlice } from "./apiSlice";

export const testimonialApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllTestimonial: builder.query(
            {
                query: () => `/testimonials`,
                providesTags: ['testimonials']
            }
        ),
        getTestimonialById: builder.query(
            {
                query: (id) => `/testimonials/${id}`,
                providesTags: ['testimonial']
            }
        ),
        addNewTestimonial: builder.mutation(
            {
                query: (testimonial) => {
                    return {
                        url: '/testimonials',
                        method: 'POST',
                        body: testimonial
                    }
                },
                invalidatesTags: ['testimonials', 'testimonial']

            }
        ),
      
        updateTestimonial: builder.mutation({
        query: ({ id, ...data }) => ({
            url: `/testimonials/${id}`,
            method: 'PUT',
            body: data,
        }),
        invalidatesTags: ['testimonials', 'testimonial'],
        }),



        deleteTestimonial: builder.mutation(
            {
                query: (id) => {
                    return {
                        url: `/testimonials/${id}`,
                        method: 'DELETE',
                    }
                },
                invalidatesTags: ['testimonials', 'testimonial']
            }
        ),
    }),
})

export const {
    useGetAllTestimonialQuery,
    useGetTestimonialByIdQuery,
    useAddNewTestimonialMutation,
    useUpdateTestimonialMutation,
    useDeleteTestimonialMutation
} = testimonialApi;