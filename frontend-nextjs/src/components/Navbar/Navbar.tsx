"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // For client-side transitions
import { usePathname } from "next/navigation"; // To get the current path for active link

// Assuming assets.ts contains your image imports
import { assets } from "@/assets/assets"; // Adjust the path as needed

// Define the type for navLinks
interface NavLinks {
  [key: string]: string;
}

const navLinks: NavLinks = {
  home: "/",
  menu: "#explore-menu",
  "mobile app": "#AppDownload",
  "contact us": "#Footer",
};

function capitalize(word: string): string {
  const words = word.split(" ");
  return words.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>("home"); // State to manage active menu item
  const pathname = usePathname(); // Get current pathname from Next.js

  // Effect to set active menu based on current path on mount
  // Note: For hash links, you might need a more sophisticated scroll listener
  // to determine if a section is in view. For now, we'll set it based on the root path.
  React.useEffect(() => {
    if (pathname === "/") {
      setActiveMenu("home");
    }
    // You might add more logic here for other routes if they directly map to menu items
  }, [pathname]);

  return (
    <div className="flex justify-between items-center py-5 sticky top-0 bg-white z-50">
      <Link href="/">
        <Image
          src={assets.logo}
          alt="Logo"
          className="w-[150px] sm:w-[140px] md:w-[120px]"
        />
      </Link>
      <ul className="hidden md:flex list-none gap-5 text-[#49557e] text-lg sm:text-base">
        {Object.entries(navLinks).map(([menu, link]) => (
          <li
            key={menu}
            onClick={() => setActiveMenu(menu)}
            className={`cursor-pointer pb-0.5 ${
              activeMenu === menu ? "border-b-2 border-[#49557e]" : ""
            }`}
          >
            {/* For hash links, use regular <a> tags or a custom scroll-to-section function */}
            {link.startsWith("#") ? (
              <a href={link}>{capitalize(menu)}</a>
            ) : (
              <Link href={link}>{capitalize(menu)}</Link>
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-10 sm:gap-7 md:gap-5">
        <Image
          src={assets.search_icon}
          alt="Search"
          className="w-[24px] sm:w-[22px] md:w-[20px]"
        />
        <div className="relative">
          <Link href="/cart">
            <Image
              src={assets.basket_icon}
              alt="Basket"
              className="w-[24px] sm:w-[22px] md:w-[20px]"
            />
          </Link>
          {/* You'll need to pass getTotalCartAmount from a context or prop if it's still used */}
          {/* For now, assuming getTotalCartAmount() is replaced or handled differently */}
          {/* <div className={getTotalCartAmount() === 0 ? "" : "absolute min-w-[10px] min-h-[10px] bg-tomato rounded-full top-[-8px] right-[-8px]"}></div> */}
          <div className="absolute min-w-[10px] min-h-[10px] bg-tomato rounded-full top-[-8px] right-[-8px]"></div>{" "}
          {/* Placeholder dot */}
        </div>
        {/* Removed login/logout button and profile dropdown as per request */}
      </div>
    </div>
  );
};

export default Navbar;
