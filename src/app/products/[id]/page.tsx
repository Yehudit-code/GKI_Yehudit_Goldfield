import { getProductById, Product } from "@/utils/api";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const product: Product = await getProductById(id);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="w-64 h-64 object-contain mx-auto mb-6"
      />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg font-semibold mb-6">${product.price}</p>
      <p className="text-lg font-semibold mb-6">{product.category}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}
