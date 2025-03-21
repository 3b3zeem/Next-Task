import { Product } from "@/types/products";
import { Category } from "@/types/category";
import ProductListClient from "@/components/ProductListClient";

export default async function ProductsPage() {
  let allProducts: Product[] = [];
  let allCategories: Category[] = [];

  try {
    const productsResponse = await fetch("https://e-commerce-api-tau-five.vercel.app/product", {
      cache: "no-store",
    });
    if (!productsResponse.ok) {
      throw new Error("Failed to fetch products");
    }
    const productsData = await productsResponse.json();

    if (Array.isArray(productsData)) {
      allProducts = productsData;
    } else if (productsData && typeof productsData === "object" && Array.isArray(productsData.data)) {
      allProducts = productsData.data;
    } else {
      throw new Error("Unexpected products data format");
    }

    const categoriesResponse = await fetch("https://e-commerce-api-tau-five.vercel.app/category", {
      cache: "no-store",
    });
    if (!categoriesResponse.ok) {
      throw new Error("Failed to fetch categories");
    }
    const categoriesData = await categoriesResponse.json();

    if (Array.isArray(categoriesData)) {
      allCategories = categoriesData;
    } else if (categoriesData && typeof categoriesData === "object" && Array.isArray(categoriesData.data)) {
      allCategories = categoriesData.data;
    } else {
      throw new Error("Unexpected categories data format");
    }

  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Product Listing</h1>
        <p className="text-center text-red-500">Failed to load data. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Product Listing</h1>
      <ProductListClient products={allProducts} categories={allCategories} />
    </div>
  );
}