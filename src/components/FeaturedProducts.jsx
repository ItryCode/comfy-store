import React from "react";
import SectionTitle from "./SectionTitle";

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </div>
  );
};

export default FeaturedProducts;
