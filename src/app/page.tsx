import { getAllProducts, Product } from "@/utils/api";
import ProductCard from "@/components/ProductCard";

export default async function HomePage() {
  const products: Product[] = await getAllProducts();

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </main>
  );
}