import Image from "next/image";
import NavLink from "./NavLink";
import AuthStatus from "./AuthStatus";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/product" },
  { name: "About", path: "/about" },
];

const Navigation = () => {
  return (
    <nav className="sticky bg-white backdrop-blur-md px-20 rounded shadow-md z-full flex justify-between items-center">
      <div>
        <Image src={"/logo.png"} alt="logo" width={100} height={50} />
      </div>
      <div className="flex justify-between gap-10 items-center text-lg font-semibold text-[#010101]">
        <ul className="flex gap-10">
          {navItems.map(({ name, path }) => (
            <NavLink key={name} href={path}>
              {name}
            </NavLink>
          ))}
        </ul>
        <AuthStatus />
      </div>
    </nav>
  );
};

export default Navigation;
