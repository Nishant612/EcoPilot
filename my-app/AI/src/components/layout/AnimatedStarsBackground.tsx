"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import starsBG from "@/assets/stars.png";

interface AnimatedStarsBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  height?: string;
}

export default function AnimatedStarsBackground({
  className = "",
  children,
  height = "min-h-screen",
}: AnimatedStarsBackgroundProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <motion.section
      ref={ref}
      className={`${height} flex items-center relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${starsBG.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundPositionY,
      }}
    >
      {/* Radial gradient overlay to match home page */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5),rgb(14,0,36,.5)_78%,transparent)] pointer-events-none z-0"></div>
      <div className="relative z-10 w-full flex justify-center items-center">
        {children}
      </div>
    </motion.section>
  );
}
