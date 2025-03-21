import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProfileClient from "@/components/ProfileClient";
import { Order } from "@/types/order";
import { redirect } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  image?: string;
}

async function fetchOrderHistory(): Promise<Order[]> {
  return [
    {
      id: "1",
      date: "2025-03-15",
      total: 2999.97,
      products: [
        {
          productId: "67d0de9751ec507949925b37",
          title: "Smartphone X12",
          quantity: 3,
          price: 999.99,
        },
      ],
    },
    {
      id: "2",
      date: "2025-03-16",
      total: 400,
      products: [
        {
          productId: "67d1d9eec06310c600efd3ea",
          title: "Camera",
          quantity: 2,
          price: 200,
        },
      ],
    },
  ];
}

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  const user: User = {
    id: session.user?.email || "unknown",
    name: session.user?.name || "Unknown User",
    email: session.user?.email || "unknown@example.com",
    phone: "",
    address: "",
    image: session.user?.image || undefined,
  };

  const orders = await fetchOrderHistory();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">User Profile</h1>
      <ProfileClient user={user} orders={orders} />
    </div>
  );
}
