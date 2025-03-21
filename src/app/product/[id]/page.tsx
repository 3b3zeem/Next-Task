import { Product } from "@/types/products";
import ProductDetailClient from "@/components/ProductDetailClient";

// إجبار الصفحة على أن تكون ديناميكية
export const dynamic = "force-dynamic";

interface ProductDetailPageProps {
  params: { id: string };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = params;
  let product: Product | null = null;

  try {
    const response = await fetch(`https://e-commerce-api-tau-five.vercel.app/product/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const responseData = await response.json();

    // استخراج data من الاستجابة
    if (!responseData || typeof responseData !== "object" || !responseData.data) {
      throw new Error("Unexpected product data format");
    }
    product = responseData.data;

  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Product Details</h1>
        <p className="text-center text-red-500">Failed to load product. Please try again later.</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Product Details</h1>
        <p className="text-center text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Product Details</h1>
      <ProductDetailClient initialProduct={product} />
    </div>
  );
}