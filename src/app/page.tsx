// app/page.tsx (או HomePage.tsx)
import { getAllProducts, Product } from "@/utils/api";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default async function HomePage() {
  const products: Product[] = await getAllProducts();

  return (
    <main className="min-h-[calc(100vh-13vh)] p-6">       
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
