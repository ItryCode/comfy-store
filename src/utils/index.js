import axios from "axios";

export const instance = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api",

  headers: { "Content-Type": "application/json; charset=utf-8" },
});
