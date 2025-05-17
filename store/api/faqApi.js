import { apiSlice } from "./apiSlice";

export const faqApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllFaqCategory: builder.query(
            {
                query: () => `/faq/category`,
                providesTags: ['faqs']
            }
        ),
        getAllFaq: builder.query(
            {
                query: () => `/faq`,
                providesTags: ['faqs']
            }
        ),
        getFaqByRole: builder.query(
            {
                query: (role) => `/faq/${role}`,
                providesTags: ['faq']
            }
        ),
        getFaqById: builder.query(
            {
                query: (id) => `/faq/category/${id}`,
                providesTags: ['faq']
            }
        ),
        sendNewFaq: builder.mutation(
            {
                query: (faqData) => {
                    return {
                        url: '/faq-submit',
                        method: 'POST',
                        body: faqData
                    }
                },
                invalidatesTags: ['faqs', 'faq']

            }
        ),
        addNewFaq: builder.mutation(
            {
                query: (faqData) => {
                    return {
                        url: '/faq',
                        method: 'POST',
                        body: faqData
                    }
                },
                invalidatesTags: ['faqs', 'faq']

            }
        ),
      
        updateFaq: builder.mutation({
        query: ({ id, ...data }) => ({
            url: `/faq/${id}`,
            method: 'PUT',
            body: data,
        }),
        invalidatesTags: ['faqs', 'faq'],
        }),
        deleteFaq: builder.mutation(
            {
                query: (id) => {
                    return {
                        url: `/faq/${id}`,
                        method: 'DELETE',
                    }
                },
                invalidatesTags: ['faqs', 'faq']
            }
        ),
    }),
})

export const {
    useGetAllFaqCategoryQuery,
    useGetAllFaqQuery,
    useGetFaqByRoleQuery,
    useGetFaqByIdQuery,
    useSendNewFaqMutation,
    useAddNewFaqMutation,
    useUpdateFaqMutation,
    useDeleteFaqMutation
} = faqApi;