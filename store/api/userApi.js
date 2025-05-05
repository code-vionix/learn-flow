import { apiSlice } from "./apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateUserPassword: builder.mutation({
            query: ({ id, currentPassword, newPassword }) => ({
                url: `/users/${id}`,
                method: 'PUT',
                body: { currentPassword, newPassword },
            }),
            invalidatesTags: ['user'],
        }),

    }),
})

export const {
    useUpdateUserPasswordMutation
} = userApi;