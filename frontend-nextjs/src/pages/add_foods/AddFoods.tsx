"use client"; // This component handles user input and context, so it needs to be a client component.

import React, { useContext } from "react";
import { StoreContextProvider } from "@/context/StoreContext"; // Using path alias for context

// Define the type for a single food item if it's not already defined in StoreContext
// Assuming food_list contains objects like this:
interface FoodItemType {
  _id: string; // Or 'id' depending on your backend
  name: string;
  description: string;
  price: number;
  image: string; // Or whatever your image field is named
  category: string; // Assuming there might be a category
}

const AddFoods: React.FC = () => {
  // Although cartItems, food_list, removeFromCart, and getTotalCartAmount are in the context,
  // they don't seem to be directly used within the current JSX of AddFoods.
  // I'm keeping them in the destructuring as they were in the original,
  // but they could be removed if truly not needed here.
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContextProvider);

  // The original code had a commented-out navigate, and rows array was declared but unused.
  // I've removed the commented-out navigate and the unused 'rows' variable.

  return (
    <div className="p-6">
      <form
        action={url + "api/food/add-multiple"}
        method="post"
        className="w-full max-w-4xl mx-auto"
      >
        <table className="w-full border-collapse my-6 text-sm font-sans min-w-[400px] shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#009879] text-white text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Description</th>
              <th className="p-3">Price</th>
              <th className="p-3">Image</th>
              <th className="p-3">Del</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 last:border-b-2 last:border-[#009879] even:bg-gray-50">
              <td className="p-3">
                <input
                  type="text"
                  className="w-full p-0 border-none outline-none focus:ring-0 bg-transparent"
                  placeholder="Food Name"
                />
              </td>
              <td className="p-3">
                <input
                  type="text"
                  className="w-full p-0 border-none outline-none focus:ring-0 bg-transparent"
                  placeholder="Description"
                />
              </td>
              <td className="p-3">
                <input
                  type="number"
                  className="w-full p-0 border-none outline-none focus:ring-0 bg-transparent"
                  placeholder="Price"
                />
              </td>
              <td className="p-3">
                <input
                  type="file"
                  className="w-full p-0 border-none outline-none focus:ring-0 bg-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
              </td>
              <td className="p-3">
                <button
                  type="button"
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  x
                </button>
              </td>
            </tr>
            {/* You would typically map over an array of existing food items here */}
            {/* Example of how you might render rows from food_list: */}
            {/*
            {food_list.map((item: FoodItemType) => (
              <tr key={item._id} className="border-b border-gray-200 last:border-b-2 last:border-[#009879] even:bg-gray-50">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.description}</td>
                <td className="p-3">{item.price}</td>
                <td className="p-3">
                  <img src={url + "images/" + item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                </td>
                <td className="p-3">
                  <button
                    type="button"
                    onClick={() => removeFromCart(item._id)} // Or a specific removeFoodItem function
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
            */}
          </tbody>
        </table>
        {/* This input field was outside the table in the original, keeping it that way. */}
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded focus:border-[#009879] focus:ring focus:ring-[#009879] focus:ring-opacity-50"
          placeholder="Additional Input (e.g., Batch ID)"
        />
        {/* Add a submit button for the form */}
        <button
          type="submit"
          className="mt-4 px-6 py-3 bg-[#009879] text-white rounded-md font-semibold hover:bg-green-700 transition-colors"
        >
          Add Food Items
        </button>
      </form>
    </div>
  );
};

export default AddFoods;
