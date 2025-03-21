import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Cart() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Cart Page</h1>
      <p>Welcome, {session.user?.name}!</p>
    </div>
  );
}