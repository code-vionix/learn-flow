import { apiSlice } from "./apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => `/category`,
      providesTags: ["category"],
    }),
  }),
});

export const { useGetAllCategoryQuery } = categoryApi;
