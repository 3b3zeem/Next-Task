"use server";

import { Product } from "@/types/products";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface WishlistProduct {
  _id: string;
  productId: string;
  title?: string;
  basePrice?: number;
  finalPrice?: number;
  image?: string;
}

let mockWishlist: WishlistProduct[] = [];

export async function addToWishlist(product: Product) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      success: false,
      message: "You need to be logged in to add to wishlist.",
    };
  }

  try {
    const exists = mockWishlist.some((item) => item.productId === product.id);
    if (exists) {
      return {
        success: false,
        message: `${product.title} is already in your wishlist!`,
      };
    }

    mockWishlist.push({
      _id: Date.now().toString(),
      productId: product.id,
      title: product.title,
      basePrice: product.finalPrice,
      finalPrice: product.finalPrice,
      image: product.images[0]?.secure_url,
    });
    revalidatePath("/products");
    return {
      success: true,
      message: `${product.title} has been added to your wishlist!`,
    };
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    return {
      success: false,
      message: "Failed to add to wishlist. Please try again.",
    };
  }
}

export async function getWishlist(): Promise<WishlistProduct[]> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return [];
  }

  return mockWishlist;
}

export async function removeFromWishlist(productId: string) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      success: false,
      message: "You need to be logged in to remove from wishlist.",
    };
  }

  try {
    mockWishlist = mockWishlist.filter((item) => item.productId !== productId);
    revalidatePath("/products");
    return {
      success: true,
      message: "Product removed from wishlist!",
    };
  } catch (error) {
    console.error("Error removing from wishlist:", error);
    return {
      success: false,
      message: "Failed to remove from wishlist. Please try again.",
    };
  }
}