"use client"; // This page uses client-side state (useState)

import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar"; // Assuming Navbar is in components
import Header from "@/components/Header/Header"; // Assuming Header is in components
import ExploreMenu from "@/components/ExploreMenu/ExploreMenu"; // Assuming ExploreMenu is in components
import FoodDisplay from "@/components/FoodDisplay/FoodDisplay"; // Assuming FoodDisplay is in components
import AppDownload from "@/components/AppDownload/AppDownload"; // Assuming AppDownload is in components
import Footer from "@/components/Footer/Footer"; // Assuming Footer is in components

export default function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Header /> {/* This Header is already part of the main layout */}
      <main className="flex-grow">
        {" "}
        {/* Use main tag for primary content */}
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
}
