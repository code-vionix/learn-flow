import { apiSlice } from "./apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateUserPassword: builder.mutation({
            query: ({  currentPassword, newPassword }) => ({
                url: `/users/change-password`,
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

