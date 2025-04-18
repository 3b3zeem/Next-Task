import { Product } from "@/types/products";
import { Category } from "@/types/category";
import ProductCategoriesClient from "@/components/ProductCategoriesClient";
import FeaturedProducts from "@/components/FeaturedProducts";

export default async function Home() {
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
      console.error("Categories Data is not an array:", categoriesData);
      allCategories = [];
    }

  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to Our Store</h1>
        <p className="text-center text-red-500">Failed to load data. Please try again later.</p>
      </div>
    );
  }

  const featuredProducts = Array.isArray(allProducts) ? allProducts.slice(0, 3) : [];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Our Store</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <FeaturedProducts initialProducts={featuredProducts} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Shop by Category & its products</h2>
        <ProductCategoriesClient categories={allCategories} products={allProducts} />
      </section>
    </div>
  );
}