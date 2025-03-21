import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sign Out</h1>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        style={{ padding: "10px 20px" }}
      >
        Sign Out
      </button>
    </div>
  );
}