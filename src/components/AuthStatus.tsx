"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function AuthStatus() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <li className="relative group list-none">
      {session ? (
        <div className="flex items-center gap-4">
          {session.user?.image ? (
            <Image
              src={session.user?.image}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full"
            />
          ) : (
            <div className="w-[50px] h-[50px] rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-[#010101]">
                {session.user?.name?.charAt(0) || "U"}
              </span>
            </div>
          )}
          <Link href={"/profile"} className="text-[#010101]">
            Welcome, {session.user?.name?.split(" ")[0] || "User"}
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="transition-all duration-300 cursor-pointer bg-orange-500 p-2 hover:opacity-80 text-white rounded"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <Link
          href="/login"
          className={`transition-all duration-300 cursor-pointer ${
            pathname === "/login" ? "text-[#9e6b2a]" : "hover:text-[#9e6c2ab4]"
          }`}
        >
          Login
        </Link>
      )}
    </li>
  );
}
