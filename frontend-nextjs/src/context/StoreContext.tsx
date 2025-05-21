// context/StoreContext.tsx
"use client"; // <--- Add this line here

import React, { createContext, useEffect, useState, ReactNode } from "react";
// import axios from "axios"; // Commented out axios import

export interface FoodItemType {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
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
  const [food_list, setFoodList] = useState<FoodItemType[]>([
    // Dummy data
    { _id: "1", name: "Vegan Pizza", price: 120000, description: "Delicious vegan pizza.", image: "pizza.png", category: "Pizza" },
    { _id: "2", name: "Cheesy Burger", price: 75000, description: "Juicy burger with cheese.", image: "burger.png", category: "Burger" },
    { _id: "3", name: "Sushi Rolls", price: 90000, description: "Fresh sushi rolls.", image: "sushi.png", category: "Sushi" },
  ]);

  const addToCart = async (itemId: string) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = async (itemId: string) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = (): number => {
    let totalAmount: number = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    // No API calls, so this useEffect is now essentially a no-op for now
  }, []);

  const contextValue: StoreContextType = {
    food_list,
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