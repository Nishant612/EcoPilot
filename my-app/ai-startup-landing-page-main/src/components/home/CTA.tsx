"use client";

import GradientButton from "../ui/GradientButton";
import starsBG from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import useRelativeMousePosition from "@/hooks/useRelativeMousePosition";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  const [mouseX, mouseY] = useRelativeMousePosition(borderRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black ,transparent)`;
  return (
    <section ref={ref} className="py-20 md:py-24">
      <div className="container">
        <motion.div
          ref={borderRef}
          animate={{ backgroundPositionX: starsBG.width }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className=" border border-white/15 py-24 rounded-xl overflow-hidden relative group"
          style={{
            backgroundImage: `url(${starsBG.src})`,
            backgroundPositionY,
          }}
        >
          <div
            className="group-hover:opacity-0 absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] transition duration-700"
            style={{ backgroundImage: `url(${gridLines.src})` }}
          />
          <motion.div
            className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay transition duration-700"
            style={{ backgroundImage: `url(${gridLines.src})`, maskImage }}
          />
          <div className=" relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              AI-driven SEO for everyone
            </h2>
            <p className="text-center max-w-xs  md:text-xl mx-auto text-lg text-white/70 px-4 mt-5 tracking-tight">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex mt-8 items-center justify-center">
              <GradientButton
                initial="close"
                whileInView="open"
                variants={{
                  open: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 250,
                      damping: 25,
                      delay: 1,
                    },
                  },
                  close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
                }}
              >
                Join waitlist
              </GradientButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
