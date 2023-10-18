import { formatPrice } from "../utils";
import { Link, useLoaderData } from "react-router-dom";

import React from "react";

const ProductList = () => {
  const { products } = useLoaderData();
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { image, title, company, price } = product.attributes;
        const total = formatPrice(price);
        return (
          <Link
            key={product.id}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
            to={`/products/${product.id}`}
          >
            <img
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
              src={image}
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              <h4 className="capitalize text-md primary">{company}</h4>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-lg">{total}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
