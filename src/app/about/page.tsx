import React from "react";

export const metadata = {
  title: "about",
};

export default function about() {
  return (
    <div className="min-h-screen p-20">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700 max-w-3xl">
        We are an online store specializing in providing high-quality products at competitive prices. Our goal is to offer a smooth and enjoyable shopping experience for everyone.
      </p>

      <div className="mt-10 max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">🚀 Our Features:</h2>
        <ul className="text-gray-700 space-y-2">
          <li>✅ High-quality products</li>
          <li>✅ Fast and secure shipping</li>
          <li>✅ 24/7 customer support</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">📩 Contact Us</h2>
        <p className="text-gray-600 mt-2">📧 Email: support@store.com</p>
        <p className="text-gray-600">📞 Phone: +20 123 456 789</p>
      </div>
    </div>
  );
}
