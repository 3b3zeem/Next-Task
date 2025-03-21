'use client';

import { signIn } from "next-auth/react";

export default function Login() {
  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  const handleFacebookSignIn = async () => {
    await signIn("facebook", { callbackUrl: "/" });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>
      <button onClick={handleGoogleSignIn} style={{ margin: "10px", padding: "10px 20px" }} className="bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 duration-150 transition">
        Sign in with Google
      </button>
      <button onClick={handleFacebookSignIn} style={{ margin: "10px", padding: "10px 20px" }} className="bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 duration-150 transition">
        Sign in with Facebook
      </button>
    </div>
  );
}