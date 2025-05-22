import { apiSlice } from "./apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => `/users/profile`,
      providesTags: ["UserProfile"],
    }),
    updateUserInfo: builder.mutation({
      query: (userData) => ({
        url: `/users/profile`,
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: ["UserProfile"],
    }),

    updateUserPassword: builder.mutation({
      query: ({ currentPassword, newPassword }) => ({
        url: `/users/change-password`,
        method: "PUT",
        body: { currentPassword, newPassword },
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetUserInfoQuery,useUpdateUserInfoMutation, useUpdateUserPasswordMutation } = userApi;
