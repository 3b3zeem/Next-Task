"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="relative group">
      <Link
        href={href}
        className={`transition-all duration-300 ${
          isActive ? "text-[#9e6b2a]" : "hover:text-[#9e6c2ab4]"
        }`}
      >
        {children}
      </Link>
      <span
        className={`absolute left-0 bottom-0 w-full h-1 bg-[#9e6b2a] transition-all duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0"
        } group-hover:scale-x-100`}
      ></span>
    </li>
  );
}
