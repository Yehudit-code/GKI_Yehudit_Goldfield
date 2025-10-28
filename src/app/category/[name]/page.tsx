import { getProductsByCategory, Product } from "@/utils/api";
import ProductCard from "@/components/ProductCard";

interface CategoryPageProps {
  params: { name: string };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { name } = params; // שם הקטגוריה מה-URL
  const products: Product[] = await getProductsByCategory(name);

  return (
    <main className="p-6  pt-35">
      <h1 className="text-2xl font-bold mb-6 capitalize">{name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
