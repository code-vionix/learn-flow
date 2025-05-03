import { apiSlice } from "./apiSlice";

export const purchesHistoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPurchesHistory: builder.query({
      query: (userId) => `purches/history/${userId}`,
      providesTags: ["PurchesHistory"],
    }),
  }),
});

export const { useGetPurchesHistoryQuery } = purchesHistoryApi;
