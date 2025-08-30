"use client";

import { features } from "@/constants";
import productImage from "@/assets/product-image.png";
import FeatureTab from "../ui/FeatureTab";
import { useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";

export default function Features() {
  const [selectedTab, setSelectedTab] = useState(0);
  const backgroundPositionX = useMotionValue(features[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(features[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(features[0].backgroundSizeX);

  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;
  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);
    const options: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };
    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, features[index].backgroundSizeX],
      options
    );
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), features[index].backgroundPositionX],
      options
    );
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), features[index].backgroundPositionY],
      options
    );
  };
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl text-green-600 font-semibold mb-2">🚦 Real-time Navigation</h3>
          <p className="text-gray-900" >Get instant traffic updates and hazard alerts for a safer commute.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl text-green-600 font-semibold mb-2">🅿️ Smart Parking</h3>
          <p className="text-gray-900" >Discover available parking spots near your destination in seconds.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl text-green-600 font-semibold mb-2">🌱 Eco-Friendly Routes</h3>
          <p className="text-gray-900" >Reduce your carbon footprint by choosing sustainable routes.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl text-green-600 font-semibold mb-2">🤝 Carpool Matching</h3>
          <p className="text-gray-900" >Connect with nearby commuters to save money and reduce traffic.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl text-green-600 font-semibold mb-2">⚡ EV Charging Stations</h3>
          <p className="text-gray-900" >Locate charging points for electric vehicles in real-time.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl text-green-600 font-semibold mb-2">📊 Smart Insights</h3>
          <p className="text-gray-900" >Track your travel history, fuel savings, and eco-impact reports.</p>
        </div>
      </div>
    </section>
  );
}
