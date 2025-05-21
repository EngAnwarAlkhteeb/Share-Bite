import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Your global Tailwind CSS imports
import StoreContextProvider from "@/context/StoreContext"; // Import your StoreContextProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Share Bite App", // Adjust your app title
  description: "Food Delivery App with Next.js and Tailwind CSS", // Adjust description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreContextProvider> {/* Wrap your children here */}
          {children}
        </StoreContextProvider>
      </body>
    </html>
  );
}