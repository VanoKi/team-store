import type { Product, ProductsResponse } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://dummyjson.com/products?limit=12");

  if (!response.ok) {
    throw new Error(`Failed to load products: ${response.status}`);
  }

  const data = (await response.json()) as ProductsResponse;

  return data.products;
};
