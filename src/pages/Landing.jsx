import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { instance } from "../utils";

const url = "/products?features=true";

export const loader = async () => {
  const response = await instance(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
