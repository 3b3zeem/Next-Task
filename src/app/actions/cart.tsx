"use server";

import { Product } from "@/types/products";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface CartProduct {
  _id: string;
  productId: string;
  title: string;
  quantity: number;
  basePrice: number;
  finalPrice: number;
  image: string;
}

let mockCart: CartProduct[] = [];

export async function addToCart(product: Product, quantity: number = 1) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      success: false,
      message: "You need to be logged in to add to cart.",
    };
  }

  try {
    mockCart.push({
      _id: Date.now().toString(),
      productId: product.id,
      title: product.title,
      quantity,
      basePrice: product.finalPrice,
      finalPrice: product.finalPrice * quantity,
      image: product.images[0]?.secure_url || "",
    });
    revalidatePath("/products");
    return {
      success: true,
      message: `${product.title} has been added to your cart!`,
    };
  } catch (error) {
    console.error("Error adding to cart:", error);
    return {
      success: false,
      message: "Failed to add to cart. Please try again.",
    };
  }
}

export async function getCart(): Promise<CartProduct[]> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return [];
  }

  return mockCart;
}