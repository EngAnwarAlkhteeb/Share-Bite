"use client"; // This component has interactivity (onClick, useContext, navigation)

import React, { useContext } from "react";
import Image from "next/image"; // For image optimization
import { useRouter } from "next/navigation"; // For programmatic navigation
import { StoreContext } from "@/context/StoreContext"; // Using path alias for context

// Define the type for a single food item if it's not already defined in StoreContext
interface FoodItemType {
  _id: string; // Assuming unique identifier
  name: string;
  price: number;
  image: string;
  // Add other properties if they exist on your food_list items, e.g., description, category
}

const Cart: React.FC = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);

  const router = useRouter(); // Initialize useRouter hook for navigation

  return (
    <div className="mt-10 max-w-6xl mx-auto px-4">
      <div className="cart-items">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)] font-medium">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="h-[1px] bg-gray-200 border-none" />

        {/* Use a fragment <> instead of <div> directly inside map to avoid unnecessary divs */}
        {food_list.map((item: FoodItemType) => {
          if (cartItems[item._id] > 0) {
            return (
              <React.Fragment key={item._id}>
                {" "}
                {/* Added key for list rendering */}
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center my-2.5 text-black">
                  <Image
                    src={url + "images/" + item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded object-cover"
                  />
                  <p>{item.name}</p>
                  <p>Rp{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rp{item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cursor-pointer text-center"
                  >
                    x
                  </p>
                </div>
                <hr className="h-[1px] bg-gray-200 border-none" />
              </React.Fragment>
            );
          }
          return null; // Important to return null if the condition is not met
        })}
      </div>

      <div className="mt-20 flex justify-between gap-[max(12vw,20px)] flex-col md:flex-row">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Cart Totals</h2>
          <div>
            <div className="flex justify-between text-gray-700">
              <p>Subtotal</p>
              <p>Rp{getTotalCartAmount()}</p>
            </div>
            <hr className="my-2.5 h-[1px] bg-gray-200 border-none" />
            <div className="flex justify-between text-gray-700">
              <p>Delivery Fee</p>
              <p>Rp{getTotalCartAmount() === 0 ? 0 : 10000}</p>
            </div>
            <hr className="my-2.5 h-[1px] bg-gray-200 border-none" />
            <div className="flex justify-between text-black font-bold">
              <b>Total</b>
              <b>
                Rp
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10000}
              </b>
            </div>
          </div>
          <button
            onClick={() => router.push("/order")} // Using useRouter for navigation
            className="border-none text-white bg-tomato w-[max(15vw,200px)] py-3 rounded-md cursor-pointer transition-colors duration-300 hover:bg-red-600"
          >
            Proceed To Checkout
          </button>
        </div>

        <div className="flex-1">
          <div>
            <p className="text-gray-700">
              If you have a promo code, enter it here
            </p>
            <div className="mt-2.5 flex justify-between items-center bg-gray-100 rounded-md">
              <input
                type="text"
                placeholder="promo code"
                className="bg-transparent border-none outline-none pl-2.5 flex-1 p-2"
              />
              <button className="w-[max(10vw,120px)] py-3 bg-black border-none text-white rounded-md transition-colors duration-300 hover:bg-gray-800">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
