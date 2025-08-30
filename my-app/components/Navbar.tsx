"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "Login", href: "/Login" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow sticky top-0 z-50 text-green-500 font-bold">
      <div className="text-2xl font-bold text-green-600">EcoPilot</div>

      
      <ul className="hidden md:flex space-x-6 font-medium">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="hover:text-green-600 transition">
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/signup"
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
          >
            Sign Up
          </Link>
        </li>
      </ul>

      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl focus:outline-none"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 md:hidden font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-green-600 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
