import React from "react";
import Image from "next/image"; // Import Image from next/image for optimized images

const Header: React.FC = () => {
  return (
    <div
      className="relative h-[34vw] mx-auto mt-[30px] rounded-[5px] bg-no-repeat bg-contain"
      style={{ backgroundImage: `url('/header_img.png')` }}
    >
      {/*
        Using a div with background-image for the header,
        as Next.js Image component is better for content images rather than background images.
        Ensure 'header_img.png' is in your 'public' directory.
      */}
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] sm:max-w-[45%] md:max-w-[65%] bottom-[10%] left-[6vw] animate-fadeIn">
        <h2 className="font-medium text-tomato text-[max(4.5vw,22px)]">
          Make Every Meal Count
        </h2>
        <p className="text-white text-[1vw] hidden sm:block">
          {" "}
          {/* Hide on mobile, show on sm and above */}
          48 million tons of food wasted every year,{" "}
          <b className="text-tomato">waste no more!</b>
          fight food waste together with{" "}
          <strong className="text-tomato block">ShareBite.</strong>
        </p>
        {/* The button was commented out, so I've kept it commented here. */}
        {/* <button className="border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] sm:py-[2vw] sm:px-[4vw]">View Menu</button> */}
      </div>
    </div>
  );
};

export default Header;
