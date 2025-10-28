const API_URL = "https://fakestoreapi.com";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const getProductById = async (id: string): Promise<Product> => {
  const res = await fetch(`${API_URL}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

export const getCategories = async (): Promise<string[]> => {
  const res = await fetch(`${API_URL}/products/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};

export const getProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  const res = await fetch(`${API_URL}/products/category/${category}`);
  if (!res.ok) throw new Error("Failed to fetch category products");
  return res.json();
};
