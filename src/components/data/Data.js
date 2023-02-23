import React, { useState } from "react";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,

} from "../../store/apiSlice";

function Data() {
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteID, setdeleteID] = useState();

  const {
    data: allProductsData,
    error,
    isError,
    isLoading,
  } = useGetAllProductsQuery();

  const { data: singleProductData } = useGetProductQuery("Apple");
  const [deletedata, deleteProductData] = useDeleteProductMutation();
  const [createdata, createProductData] = useCreateProductMutation();
  const [updatedata, updateProductData] = useUpdateProductMutation();

  console.log(" ~ deleteProductData:",
  deleteProductData
  );
  console.log(" ~ createProductData:",
  createProductData
  );
  console.log(" ~ updateProductData:",
  updateProductData
  );
  



  if (isLoading) return <h1> Loading...</h1>;

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  function handleDelete(id) {
    setdeleteID(id);
    deletedata(deleteID);
  }
  function handleEdit(id) {
    let editData = {
      id: id,
      title: "BMW Pencil",
    };
    updatedata(editData);
  }
  function handleAdd(event) {
    let newData = {
      id: 101,
      title: "BMW Pencil",
    };
    createdata(newData);
  }

  const filteredProducts = allProductsData.products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : allProductsData ? (
        <>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
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
                <th style={{ border: "1px solid black", padding: "5px" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => {
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
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      <button onClick={() => handleAdd()}>Add</button>
                      <button onClick={() => handleEdit(product.id)}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(product.id)}>
                        Delete
                      </button>
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
