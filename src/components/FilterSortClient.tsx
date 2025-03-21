"use client";

import { Category } from "@/types/category";
import { useRouter, useSearchParams } from "next/navigation";

interface FilterSortClientProps {
  categories: Category[];
}

export default function FilterSortClient({
  categories,
}: FilterSortClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/product?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div>
        <label htmlFor="category" className="mr-2">
          Category:
        </label>
        <select
          id="category"
          name="category"
          defaultValue={searchParams.get("category") || ""}
          onChange={(e) => updateSearchParams("category", e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="minPrice" className="mr-2">
          Min Price:
        </label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          defaultValue={searchParams.get("minPrice") || ""}
          onChange={(e) => updateSearchParams("minPrice", e.target.value)}
          className="border p-2 rounded w-24"
        />
      </div>
      <div>
        <label htmlFor="maxPrice" className="mr-2">
          Max Price:
        </label>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          defaultValue={searchParams.get("maxPrice") || ""}
          onChange={(e) => updateSearchParams("maxPrice", e.target.value)}
          className="border p-2 rounded w-24"
        />
      </div>

      <div>
        <label htmlFor="sort" className="mr-2">
          Sort By:
        </label>
        <select
          id="sort"
          name="sort"
          defaultValue={searchParams.get("sort") || ""}
          onChange={(e) => updateSearchParams("sort", e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
    </div>
  );
}
