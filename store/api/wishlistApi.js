import { apiSlice } from "./apiSlice";

export const wishlistApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch Wishlist
    getWishlist: builder.query({
      query: () => `/wishlist`,
      providesTags: ["Wishlist"],
    }),

    // Create Wishlist
    createWishlist: builder.mutation({
      query: (wishlistData) => ({
        url: `/wishlist`,
        method: "POST",
        body: wishlistData,
      }),
      invalidatesTags: ["Wishlist"],
    }),
  }),
});

// Export hooks
export const { useGetWishlistQuery, useCreateWishlistMutation } = wishlistApi;
