import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductList from "./ProductList";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const total = meta.pagination.total;
  console.log(total);
  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-based-content"
    }`;
  };

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {total} {total === 1 ? "Product" : "Products"}
        </h4>

        <div className="flex gap-x-2">
          <button
            onClick={() => {
              setLayout("grid");
            }}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => {
              setLayout("list");
            }}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {total === 0 ? (
          <h5 className="text-3xl mt-16">
            Sorry, no products have matched your search...{" "}
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductList />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
