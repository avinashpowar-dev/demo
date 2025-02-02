"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Imgwrapper from "./imgwrapper";


export const Navigation = () => {
  const pathname = usePathname();
  return (
    <>
    <p><Imgwrapper/></p>
    <nav className="flex justify-center items-center p-4">
      
     
      <Link
        href="/"
        className={pathname === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={
          pathname === "/about" ? "font-bold mr-4" : "text-blue-500 mr-4"
        }
      >
        About
      </Link>
      <Link
        href="/products"
        className={
          pathname.startsWith("/products")
            ? "font-bold mr-4"
            : "text-blue-500 mr-4"
        }
      >
        Product
      </Link>
      <Link
        href="/optim"
        className={
          pathname.startsWith("/optim")
            ? "font-bold mr-4"
            : "text-blue-500 mr-4"
        }
      >
        Optimization
      </Link>
      <Link
        href="/lazy-load"
        className={
          pathname.startsWith("/lazy-load")
            ? "font-bold mr-4"
            : "text-blue-500 mr-4"
        }
      >
        Lazy load
      </Link>
      
      
    </nav>
    </>
  );
};
