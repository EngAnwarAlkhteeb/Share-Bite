import React from "react";
import Image from "next/image"; // Import Image for optimized images
import { assets } from "@/assets/assets"; // Adjust path as needed

// It's generally better to define navLinks and getId directly where used or as a utility
// rather than importing from Navbar's internal logic, for better modularity.
// For now, I'll assume you still want to import it if it's external.
import navLinks from "@/components/Navbar/navLinks"; // Assuming navLinks is in a separate file

// Re-defining getId here or ensuring it's properly exported from the navLinks file
function getId(column: keyof typeof navLinks): string {
  return navLinks[column].replace("#", "");
}

const Footer: React.FC = () => {
  return (
    <div
      id={getId("contact us")}
      className="flex flex-col items-center gap-[20px] px-[8vw] pt-[80px] mt-[100px] bg-[#323232] text-[#d9d9d9]"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[35px] md:gap-[80px]">
        {" "}
        {/* Adjusted for mobile first */}
        <div className="flex flex-col items-start gap-[20px]">
          <Image
            src={assets.logo}
            alt="ShareBite Logo"
            width={150}
            height={40}
          />{" "}
          {/* Added width/height for Image component */}
          <p>
            <strong className="text-tomato">ShareBite</strong> is a social
            impact app that empowers individuals to make a difference. By simply
            sharing excess food, you can help feed the hungry, reduce waste, and
            create a more sustainable future. Join our community and be part of
            the solution.
          </p>
          <div className="flex">
            {" "}
            {/* Using flexbox for social icons */}
            <Image
              src={assets.facebook_icon}
              alt="Facebook Icon"
              className="w-[40px] mr-[15px] cursor-pointer"
              width={40}
              height={40}
            />
            <Image
              src={assets.twitter_icon}
              alt="Twitter Icon"
              className="w-[40px] mr-[15px] cursor-pointer"
              width={40}
              height={40}
            />
            <Image
              src={assets.linkedin_icon}
              alt="LinkedIn Icon"
              className="w-[40px] mr-[15px] cursor-pointer"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="text-tomato">Share Bite</h2>
          <ul>
            <li className="list-none my-[10px] cursor-pointer">Home</li>
            <li className="list-none my-[10px] cursor-pointer">About Us</li>
            <li className="list-none my-[10px] cursor-pointer">Delivery</li>
            <li className="list-none my-[10px] cursor-pointer">
              Privacy policy
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="text-white">Get In Touch</h2>
          <ul>
            <li className="list-none my-[10px] cursor-pointer">+1-2255-5825</li>
            <li className="list-none my-[10px] cursor-pointer">
              ak2211.g@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] my-[20px] bg-gray-500 border-none" />{" "}
      {/* Changed grey to a Tailwind class */}
      <div className="text-center">
        {" "}
        {/* Added text-center for small screens */}
        Copyright 2024 - ShareBite Team
      </div>
    </div>
  );
};

export default Footer;
