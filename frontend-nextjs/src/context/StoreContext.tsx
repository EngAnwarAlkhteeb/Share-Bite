// context/StoreContext.tsx
"use client";

import React, { createContext, useEffect, useState, ReactNode } from "react";
// import axios from "axios"; // axios is commented out as per your previous instruction

// Import FoodItemType and the static food_list from assets.ts
import { food_list as static_food_list, FoodItemType as AssetFoodItemType } from "@/assets/assets";
import type { StaticImageData } from 'next/image'; // Import for image type

// Refine FoodItemType for context if it's not exactly the same as in assets.ts
// For now, we'll use the one from assets.ts for consistency.
export interface FoodItemType {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string | StaticImageData; // Image can be string (if from URL) or StaticImageData (if imported)
  category: string;
}

interface CartItemsType {
  [itemId: string]: number;
}

interface StoreContextType {
  food_list: FoodItemType[];
  cartItems: CartItemsType;
  setCartItems: React.Dispatch<React.SetStateAction<CartItemsType>>;
  addToCart: (itemId: string) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  getTotalCartAmount: () => number;
  url: string;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

export const StoreContext = createContext<StoreContextType | null>(null);

interface StoreContextProviderProps {
  children: ReactNode;
}

const StoreContextProvider: React.FC<StoreContextProviderProps> = (props) => {
  const [cartItems, setCartItems] = useState<CartItemsType>({});
  const url: string = "http://localhost:4000/";
  const [token, setToken] = useState<string>("");

  // Initialize food_list state with the imported static_food_list from assets.ts
  const [food_list, setFoodList] = useState<FoodItemType[]>(static_food_list);

  const addToCart = async (itemId: string) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    // API calls remain commented out
  };

  const removeFromCart = async (itemId: string) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    // API calls remain commented out
  };

  const getTotalCartAmount = (): number => {
    let totalAmount: number = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // Ensure itemInfo is found before accessing its properties
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    // This useEffect is currently a no-op as API calls are commented out.
    // When you re-enable backend, you'd fetch data here and setFoodList.
  }, []);

  const contextValue: StoreContextType = {
    food_list, // This now holds the data from assets.ts
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;