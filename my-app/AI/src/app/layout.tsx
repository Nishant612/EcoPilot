import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Automobile Map",
  description:
    "AI-powered navigation with smart parking, eco-routes, carpool, and EV charging.",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.className, "antialiased bg-black text-white")}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
