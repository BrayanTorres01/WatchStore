"use client"; 
import { useProducts } from "../hooks/useProducts";

export default function Home() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <p>Loading watches...</p>;
  if (error) return <p>Failed to load products.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Luxury Watches</h1>
      <ul className="mt-4">
        {products.map((product: { id: number; name: string }) => (
          <li key={product.id} className="py-2">{product.name}</li>
        ))}
      </ul>
    </div>
  );
}