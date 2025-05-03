import { apiSlice } from "./apiSlice";

export const userProfile  = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => `users/profile`,
      providesTags: ["UserProfile"],
    }),
  }),
});

export const { useGetUserProfileQuery } = userProfile;
