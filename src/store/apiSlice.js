import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    // getAllProducts
    getAllProducts: builder.query({
      query: () => "products",
    }),
    // getProduct
    getProduct: builder.query({
      query: (product) => `products/search?q=${product}`,
    }),
    // deleteProduct
    deleteProduct: builder.mutation({
      query: (productId) => {
        console.log("productId", productId);
        return { url: `products/${productId}`, method: "DELETE" };
      },
    }),

    //createProduct
    createProduct: builder.mutation({
      query: (newData) => {
        console.log("newData", newData);
        return {
          url: `products/add`,
          method: "POST",
          body: newData,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        };
      },
    }),

    //updateProduct
    updateProduct: builder.mutation({
      query: (updateData) => {
        console.log("newData", updateData.id);
        const {id, ...data}=updateData
        return {
          url: `products/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
} = productsApi;
