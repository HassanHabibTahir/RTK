import React from "react";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../../store/apiSlice";

function Data() {
  const {
    data: allProductsData,
    error,
    isError,
    isLoading,
  } = useGetAllProductsQuery();
  console.log(
    "🚀 ~ file: Data.js:9 ~ Data ~ allProductsData:",
    allProductsData
  );

  const { data: singleProductData } = useGetProductQuery("Apple");
  console.log(
    "🚀 ~ file: Data.js:12 ~ Data ~ singleProductData:",
    singleProductData
  );
  if (isLoading) return <h1> Loading...</h1>;
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : allProductsData ? (
        <>
          <table
            style={{ border: "1px solid black", borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: "5px" }}>
                  ID
                </th>
                <th style={{ border: "1px solid black", padding: "5px" }}>
                  Title
                </th>
                <th style={{ border: "1px solid black", padding: "5px" }}>
                  Brand
                </th>
                <th style={{ border: "1px solid black", padding: "5px" }}>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {allProductsData.products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      {product.id}
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      {product.title}
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      {product.brand}
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      {product.description}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : null}
    </>
  );
}

export default Data;
