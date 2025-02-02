import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Fetch products from the Next.js API route
const fetchProducts = async () => {
  const { data } = await axios.get("/api/products"); // Calls the API at /api/products
  return data;
};

// Custom React Query hook for fetching products
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],  // Unique key for caching
    queryFn: fetchProducts,  // Function to fetch products
  });
};