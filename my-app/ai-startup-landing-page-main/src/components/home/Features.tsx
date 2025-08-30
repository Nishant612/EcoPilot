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
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your SEO efforts
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
          From small startups to large enterprises,our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <article className="mt-10 flex flex-col gap-3 lg:flex-row lg:justify-center lg:items-center">
          {features.map((tab, index) => (
            <FeatureTab
              selected={index === selectedTab}
              key={index}
              tab={tab}
              onClick={() => handleSelectTab(index)}
            />
          ))}
        </article>
        <figure className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            className="aspect-square bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
              backgroundPosition,
              backgroundSize,
            }}
          />
        </figure>
      </div>
    </section>
  );
}
