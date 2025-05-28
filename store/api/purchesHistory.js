import { apiSlice } from "./apiSlice";

export const purchesHistoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPurchesHistory: builder.query({
      query: () => `purches/history`,
      providesTags: ["PurchesHistory"],
    }),
  }),
});

export const { useGetPurchesHistoryQuery } = purchesHistoryApi;
