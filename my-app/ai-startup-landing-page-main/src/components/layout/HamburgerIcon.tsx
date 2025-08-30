"use client";
import { motion } from "framer-motion";

export default function HamburgerIcon({ toggle }: { toggle?: boolean }) {
  const span_1 = toggle ? { translateY: 3.5, rotate: 45 } : {};
  const span_2 = toggle ? { translateY: -3.5, rotate: -45 } : {};
  return (
    <>
      {Array.from({ length: 2 }, (_, index) => index).map((_, index) => (
        <motion.span
          animate={index === 0 ? span_1 : span_2}
          key={index}
          transition={{
            duration: 0.75,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
          }}
          className="rounded-full bg-black w-6 h-0.5"
        />
      ))}
    </>
  );
}
