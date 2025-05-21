"use client"; // This component uses client-side interactivity like hover effects and possibly context for getId

import React from "react";
import Image from "next/image"; // For image optimization
import { assets } from "@/assets/assets"; // Assuming assets are now in a dedicated 'assets' folder

interface AppDownloadProps {
  // If getId was a prop, define it here. Otherwise, no props needed.
}

const AppDownload: React.FC<AppDownloadProps> = () => {
  // If getId is a utility function truly needed and not specific to Navbar's internal state,
  // ensure its path is correct. If it's for creating anchor links, consider using Next.js Link
  // or a simple string ID. For now, I'll comment out getId as it seems specific.
  // const appDownloadId = getId("mobile app"); // This would need to be passed as a prop or defined globally

  return (
    <div
      className="max-w-7xl mx-auto mt-24 text-center font-medium text-[max(3vw,20px)]"
      // id={appDownloadId} // Add this back if you re-implement getId for anchor links
      id="mobile-app-section" // A simple, static ID for demonstration
    >
      <p>
        For Better Experience Download <br />
        <span className="font-semibold text-green-700">Share Bite</span>
      </p>
      <div className="flex justify-center gap-[max(2vw,10px)] mt-10">
        <Image
          src={assets.play_store}
          alt="Download on Google Play Store"
          width={180} 
          height={60} 
          className="w-[max(30vw,120px)] max-w-[180px] transition-transform duration-500 cursor-pointer hover:scale-105"
        />
        <Image
          src={assets.app_store}
          alt="Download on Apple App Store"
          width={180} 
          height={60} 
          className="w-[max(30vw,120px)] max-w-[180px] transition-transform duration-500 cursor-pointer hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AppDownload;
