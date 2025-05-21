"use client";

import React from "react";
import Image from "next/image"; 
import bg from "@/assets/bg_01.jpg"; 

const Header: React.FC = () => {
  return (
    // Main header container with background image
    <div
      className="relative w-full h-[34vw] min-h-[280px] md:h-[400px] lg:h-[450px] xl:h-[500px]
                 mx-auto mt-[30px] rounded-lg overflow-hidden
                 bg-no-repeat bg-cover bg-center" // Ensure bg-cover and bg-center for full size
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-opacity-40 flex items-center">
        {" "}
        <div
          className="relative z-10 flex flex-col items-start
                        gap-[1.5vw] md:gap-[15px]
                        max-w-[80%] sm:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%]
                        pl-[6vw] md:pl-[50px]
                        animate-fadeIn"
        >
          <h2 className="font-bold text-white text-[max(4.5vw,28px)] md:text-5xl lg:text-6xl leading-tight">
            Make Every Meal Count
          </h2>

          <p className="text-white text-[1.5vw] md:text-base lg:text-lg hidden sm:block leading-relaxed">
            48 million tons of food wasted every year,{" "}
            <b className="text-orange-300">waste no more!</b>
            <br />
            Fight food waste together with{" "}
            <strong className="text-orange-300 block mt-1">ShareBite.</strong>
          </p>

          {/* View Menu Button */}
          <button
            // You might want to navigate to the food section or a menu page
            // onClick={() => { /* router.push('/menu') or scroll to section */ }}
            className="border-none bg-white text-gray-700
                       font-medium py-[1vw] px-[2.3vw]
                       text-[max(1vw,13px)] sm:text-base
                       rounded-full cursor-pointer
                       mt-[1vw] md:mt-[20px]
                       hover:bg-gray-100 transition-colors duration-300"
          >
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
