"use client";

import { motion } from "framer-motion";
import MapsPage from "../maps/page";
// import { Link } from "lucide-react";
import Link from "next/link";
const features = [
  {
    title: "🌍 Maps Integration",
    description: "View eco-friendly routes and navigation using Google Maps.",
  },
  {
    title: "📊 Analytics",
    description: "Track your carbon footprint with real-time analytics.",
  },
  {
    title: "⚡ Optimizations",
    description: "Get AI-powered suggestions for sustainable travel.",
  },
  {
    title: "🛠 Tools",
    description: "Access our toolkit for eco-friendly decision making.",
  },
];

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-6">
        <h1 className="text-5xl font-extrabold text-green-700 mb-4">
          Welcome to EcoPilot 🚀
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Explore our main features designed to help you navigate, track, and
          optimize your journey towards sustainability.
        </p>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-8 pb-20 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <Link href="/maps">
          <motion.div
            key={index || feature.title }
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition cursor-pointer"
          >
            <h2 className="text-2xl font-bold mb-2 text-green-600">
              {feature.title}
            </h2>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
          </Link>
        ))}
      </section>
    </main>
  );
}
