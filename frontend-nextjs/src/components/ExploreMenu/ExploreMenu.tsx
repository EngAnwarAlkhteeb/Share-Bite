"use client"; // Because we use useState in the parent (page.tsx) and it controls this component

import React from "react";
import Image from "next/image"; // For optimized images
import { menu_list } from "@/assets/assets"; // Adjust path as needed
import navLinks from "@/components/Navbar/navLinks"; // Assuming navLinks is in a separate file

// Props interface for TypeScript
interface ExploreMenuProps {
  category: string;
  setCategory: (category: string) => void;
}

// Re-defining getId here or ensuring it's properly exported from the navLinks file
function getId(column: keyof typeof navLinks): string {
  return navLinks[column].replace("#", "");
}

const ExploreMenu: React.FC<ExploreMenuProps> = ({ category, setCategory }) => {
  return (
    <div
      className="flex flex-col gap-5 mt-10 md:mt-20 px-[max(5vw,12px)]"
      id={getId("menu")}
    >
      <h1 className="text-[#262626] font-medium text-center text-4xl sm:text-3xl">
        Explore our Menu
      </h1>
      <p className="text-[#808080] text-center leading-normal max-w-full sm:text-sm">
        Reduce food waste, one bite at a time.
        <strong className="text-tomato"> ShareBite</strong> connects individuals
        and businesses <br />
        to donate surplus food to those in need.
        <br />
        Join the movement and positively impact the environment and your
        community.
      </p>
      <div className="flex justify-between items-start gap-[30px] text-center my-5 overflow-x-scroll no-scrollbar">
        {menu_list.map((item, index) => {
          return (
            <div
            //   onClick={() =>
            //     setCategory((prev) =>
            //       prev === item.menu_name ? "All" : item.menu_name
            //     )
            //   }
              key={index}
              className="flex flex-col items-center cursor-pointer min-w-[80px]"
            >
              <Image
                className={`w-[7.5vw] min-w-[80px] rounded-full transition-all duration-200 ${
                  category === item.menu_name
                    ? "border-4 border-tomato p-[2px]"
                    : ""
                }`}
                src={item.menu_image}
                alt={item.menu_name} // Added alt text for accessibility
                width={100} // Example width, adjust as per your image size
                height={100} // Example height, adjust as per your image size
              />
              <p className="mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="w-full h-[2px] my-2.5 bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
