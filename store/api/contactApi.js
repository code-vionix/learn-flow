import { apiSlice } from "./apiSlice";

export const contactApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllContact: builder.query(
            {
                query: () => `/contact`,
                providesTags: ['contacts']
            }
        ),
        getContactById: builder.query(
            {
                query: (id) => `/contact/${id}`,
                providesTags: ['contact']
            }
        ),
        addNewContact: builder.mutation(
            {
                query: (contactInfo) => {
                    return {
                        url: '/contact',
                        method: 'POST',
                        body: contactInfo
                    }
                },
                invalidatesTags: ['contacts', 'contact']

            }
        ),
      
        deleteContact: builder.mutation(
            {
                query: (id) => {
                    return {
                        url: `/contact/${id}`,
                        method: 'DELETE',
                    }
                },
                invalidatesTags: ['contacts', 'contact']
            }
        ),
    }),
})

export const {
    useGetAllContactQuery,
    useGetContactByIdQuery,
    useAddNewContactMutation,
    useDeleteContactMutation
} = contactApi;