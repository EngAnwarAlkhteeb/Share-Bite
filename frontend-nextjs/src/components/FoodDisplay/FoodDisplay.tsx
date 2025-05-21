"use client"; // This component uses useContext and useState, so it must be a client component

import React, { useContext, useState } from "react";
// import { StoreContext } from "@/context/StoreContext";
import FoodItem from "@/components/FoodItem/FoodItem"; // Adjust the path as needed
import { StoreContext } from "@/context/StoreContext";

// Define the shape of a food item for TypeScript
interface FoodItemType {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string; // Assuming category is part of the food item
}

// Define the shape of the StoreContext props
interface StoreContextType {
  food_list: FoodItemType[]; // Assuming food_list is an array of FoodItemType
  // Add other context properties if needed, e.g., cart, token
}

interface FoodDisplayProps {
  category: string;
}

const FoodDisplay: React.FC<FoodDisplayProps> = ({ category }) => {
  // Use a default value for context to satisfy TypeScript, or handle it as undefined
  const { food_list } = useContext(StoreContext) as StoreContextType; // Explicitly cast the context

  const isEmpty = !food_list || food_list.length === 0;

  const [showAll, setShowAll] = useState<boolean>(false); // Type useState for boolean

  const showing_food_list = showAll ? food_list : food_list.slice(0, 10);

  return (
    <div className="mt-[30px] px-[max(5vw,12px)]">
      {" "}
      {/* Added padding for consistent layout */}
      <h2 className="text-[max(2vw,24px)] font-semibold text-center text-[#262626]">
        Top Dishes Near You
      </h2>
      <div className="grid grid-cols-minmax-200px-1fr mt-[30px] gap-[30px] row-gap-[50px]">
        {isEmpty ? (
          <p className="col-span-full text-center text-gray-500">
            No food Available
          </p> // Centered "No food" message
        ) : (
          showing_food_list.map((item, index) => {
            // Only render if the category matches or is "All"
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={item._id} // Use unique ID as key if available, fallback to index
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
            return null; // Don't render if category doesn't match
          })
        )}
      </div>
      <div className="w-full text-center mt-[30px]">
        <button
          className="w-fit h-fit py-2.5 px-4 border-none rounded-[4px] bg-[#f4511e] text-white cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-100"
          type="button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default FoodDisplay;
