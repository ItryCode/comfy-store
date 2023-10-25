import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { instance } from "../utils";

const url = "/products?features=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => instance(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  console.log(response);
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
