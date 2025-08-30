"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow sticky top-0 z-50">
      <div className="text-2xl font-bold text-green-600">SmartMobility</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 font-medium">
        <li><a href="#" className="hover:text-green-600 transition">Home</a></li>
        <li><a href="#features" className="hover:text-green-600 transition">Features</a></li>
        <li><a href="#about" className="hover:text-green-600 transition">About</a></li>
        <li><a href="#contact" className="hover:text-green-600 transition">Contact</a></li>
        <li><a href="#login" className="hover:text-green-600 transition">Login</a></li>
        <li><a href="#signup" className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">Sign Up</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl focus:outline-none"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 md:hidden font-medium">
          <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#features" onClick={() => setIsOpen(false)}>Features</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li><a href="#login" onClick={() => setIsOpen(false)}>Login</a></li>
          <li><a href="#signup" className="bg-green-600 text-white px-4 py-2 rounded-full" onClick={() => setIsOpen(false)}>Sign Up</a></li>
        </ul>
      )}
    </nav>
  );
}
