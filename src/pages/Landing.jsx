import React from "react";
import { Hero } from "../components";
import { instance } from "../utils";

const url = "/products?features=true";

export const loader = async () => {
  const response = await instance(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return <Hero />;
};

export default Landing;
