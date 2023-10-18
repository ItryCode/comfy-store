import React from "react";
import { Filters, Pagination, ProductsContainer } from "../components";
import { formatPrice, instance } from "../utils";
import { Link, useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";

const url = "/products";

export const loader = async ({ request }) => {
  const response = await instance(url);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <Pagination />
      {/* <ProductList /> */}
    </>
  );
};

export default Products;
