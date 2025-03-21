"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex pt-20 px-10">
      {/* Sidebar */}
      <aside className="w-1/6 p-5 space-y-4 shadow-sm sticky top-0 overflow-y-auto bg-white h-50 rounded">
        <nav>
          <ul className="space-y-4 text-black font-semibold">
            <li className="hover:text-orange-500 duration-200 transition-all">
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="hover:text-orange-500 duration-200 transition-all cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5">{children}</main>
    </div>
  );
}
